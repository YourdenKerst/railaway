import express from 'express'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import path from 'path'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || (isProd ? 3000 : 5173)

// ── Railway path via Overpass API + A* ───────────────────────────────
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

const { stations, journeys } = require('./node_modules/interrail/lib/index.js')

const app = express()

app.get('/api/stations', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const query = (req.query.q || '').toLowerCase()
    if (query.length < 2) { res.send('[]'); return }
    try {
      const results = await stations.search(query, { results: 10 })
      if (results?.length > 0) { res.send(JSON.stringify(results)); return }
    } catch {}
    const { STATIONS } = await import('./src/data/stations.js')
    const local = STATIONS.filter(s => s.name.toLowerCase().includes(query)).slice(0, 8)
    res.send(JSON.stringify(local))
  } catch (e) {
    res.status(500).send(JSON.stringify({ error: e.message }))
  }
})

app.get('/api/rail-path', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'public, max-age=86400')
  try {
    const stops = JSON.parse(req.query.stops || '[]')
    if (stops.length < 2) { res.send('[]'); return }
    const fullPath = []
    for (let i = 0; i < stops.length - 1; i++) {
      const seg = await _fetchSegment(stops[i], stops[i + 1])
      const pts = seg ?? [stops[i], stops[i + 1]]
      fullPath.push(...(i === 0 ? pts : pts.slice(1)))
    }
    res.send(JSON.stringify(fullPath))
  } catch (e) {
    res.status(500).send(JSON.stringify({ error: e.message }))
  }
})

app.get('/api/journeys', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const { from, to, date } = req.query
    const results = await journeys(from, to, { when: new Date(date || Date.now()), results: 5 })
    res.send(JSON.stringify(results))
  } catch (e) {
    res.status(500).send(JSON.stringify({ error: e.message }))
  }
})

if (isProd) {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))
} else {
  const { createServer } = await import('vite')
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'spa' })
  app.use(vite.middlewares)
}

app.listen(PORT, () => {
  console.log(`Railaway running on http://localhost:${PORT}`)
})
