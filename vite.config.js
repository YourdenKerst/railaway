import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// ── Railway path via Overpass API + A* ──────────────────────────────
const _railCache = new Map()

function _nodeKey(lat, lon) {
  return `${lat.toFixed(5)},${lon.toFixed(5)}`
}

function _buildGraph(elements) {
  const nodes = new Map()
  for (const way of elements) {
    if (!way.geometry?.length) continue
    const g = way.geometry
    for (let i = 0; i < g.length; i++) {
      const k = _nodeKey(g[i].lat, g[i].lon)
      if (!nodes.has(k)) nodes.set(k, { lat: g[i].lat, lon: g[i].lon, adj: new Map() })
      if (i > 0) {
        const pk = _nodeKey(g[i-1].lat, g[i-1].lon)
        const d = Math.hypot(g[i].lat - g[i-1].lat, g[i].lon - g[i-1].lon)
        nodes.get(k).adj.set(pk, d)
        nodes.get(pk).adj.set(k, d)
      }
    }
  }
  return nodes
}

function _astar(nodes, from, to) {
  const arr = [...nodes.values()]
  const nearest = (c) => arr.reduce((a, b) =>
    (a.lat-c[0])**2+(a.lon-c[1])**2 < (b.lat-c[0])**2+(b.lon-c[1])**2 ? a : b)
  const fn = nearest(from), tn = nearest(to)
  const fk = _nodeKey(fn.lat, fn.lon), tk = _nodeKey(tn.lat, tn.lon)
  if (fk === tk) return [[fn.lat, fn.lon]]

  const open = new Map([[fk, 0]])
  const g = new Map([[fk, 0]])
  const prev = new Map()

  for (let i = 0; i < 150000 && open.size > 0; i++) {
    let cur = null, best = Infinity
    for (const [k, f] of open) if (f < best) { best = f; cur = k }
    if (cur === tk) {
      const path = []
      for (let c = cur; c; c = prev.get(c)) { const n = nodes.get(c); path.unshift([n.lat, n.lon]) }
      return path
    }
    open.delete(cur)
    for (const [nb, d] of nodes.get(cur).adj) {
      const ng = g.get(cur) + d
      if (ng < (g.get(nb) ?? Infinity)) {
        prev.set(nb, cur)
        g.set(nb, ng)
        const nn = nodes.get(nb)
        open.set(nb, ng + Math.hypot(to[0]-nn.lat, to[1]-nn.lon))
      }
    }
  }
  return null
}

async function _fetchSegment(from, to) {
  const latSpan = Math.abs(to[0] - from[0])
  const lonSpan = Math.abs(to[1] - from[1])
  if (latSpan > 2.5 || lonSpan > 2.5) return null

  const cacheKey = `${from[0].toFixed(3)},${from[1].toFixed(3)}|${to[0].toFixed(3)},${to[1].toFixed(3)}`
  if (_railCache.has(cacheKey)) return _railCache.get(cacheKey)

  const pad = 0.12
  const s = Math.min(from[0],to[0])-pad, n = Math.max(from[0],to[0])+pad
  const w = Math.min(from[1],to[1])-pad, e = Math.max(from[1],to[1])+pad
  const q = `[out:json][timeout:25];way["railway"~"^(rail|light_rail|narrow_gauge)$"]["service"!~"yard|siding|spur"](${s},${w},${n},${e});out geom;`

  try {
    const resp = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(q)}`,
      signal: AbortSignal.timeout(28000),
    })
    if (!resp.ok) return null
    const data = await resp.json()
    const graph = _buildGraph(data.elements || [])
    const path = graph.size > 0 ? _astar(graph, from, to) : null
    _railCache.set(cacheKey, path)
    return path
  } catch { return null }
}
// ────────────────────────────────────────────────────────────────────

function interrailPlugin() {
  return {
    name: 'interrail-api',
    configureServer(server) {
      const { stations, journeys } = require('./node_modules/interrail/lib/index.js')

      server.middlewares.use('/api/stations', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const url = new URL(req.url, 'http://localhost')
          const query = (url.searchParams.get('q') || '').toLowerCase()
          if (query.length < 2) { res.end('[]'); return }
          // Try live API first, fall back to local dataset
          try {
            const results = await stations.search(query, { results: 10 })
            if (results && results.length > 0) { res.end(JSON.stringify(results)); return }
          } catch {}
          // Local fallback from src/data/stations.js
          const { STATIONS } = await import('./src/data/stations.js')
          const local = STATIONS.filter(s => s.name.toLowerCase().includes(query)).slice(0, 8)
          res.end(JSON.stringify(local))
        } catch (e) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: e.message }))
        }
      })

      server.middlewares.use('/api/rail-path', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Cache-Control', 'public, max-age=86400')
        try {
          const url = new URL(req.url, 'http://localhost')
          const stops = JSON.parse(url.searchParams.get('stops') || '[]')
          if (stops.length < 2) { res.end('[]'); return }
          const fullPath = []
          for (let i = 0; i < stops.length - 1; i++) {
            const seg = await _fetchSegment(stops[i], stops[i + 1])
            const pts = seg ?? [stops[i], stops[i + 1]]
            fullPath.push(...(i === 0 ? pts : pts.slice(1)))
          }
          res.end(JSON.stringify(fullPath))
        } catch(e) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: e.message }))
        }
      })

      server.middlewares.use('/api/journeys', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const url = new URL(req.url, 'http://localhost')
          const from = url.searchParams.get('from')
          const to = url.searchParams.get('to')
          const date = url.searchParams.get('date') || new Date().toISOString()
          const results = await journeys(from, to, { when: new Date(date), results: 5 })
          res.end(JSON.stringify(results))
        } catch (e) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: e.message }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), interrailPlugin()],
})
