import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

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
