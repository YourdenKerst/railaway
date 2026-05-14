import { useEffect, useCallback, useState } from 'react'
import { MapContainer, TileLayer, LayerGroup, Polyline, CircleMarker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Simulated current location: Lochem, NL
const USER_LOCATION = [52.158, 6.417]

function UserLocationMarker() {
  return (
    <>
      <CircleMarker center={USER_LOCATION} radius={14}
        pathOptions={{ color: '#3B82F6', fillColor: '#3B82F6', fillOpacity: 0.15, weight: 0 }} />
      <CircleMarker center={USER_LOCATION} radius={8}
        pathOptions={{ color: 'white', fillColor: '#3B82F6', fillOpacity: 1, weight: 3 }} />
    </>
  )
}

// ── Real railway path: via Vite dev-server proxy → Overpass + A* ─────
const railPathCache = new Map()

function useRailPath(routeId, stops, enabled) {
  const [realPath, setRealPath] = useState(() => railPathCache.get(routeId) ?? null)
  useEffect(() => {
    if (!enabled || !stops || stops.length < 2 || !routeId || railPathCache.has(routeId)) return
    const params = new URLSearchParams({ stops: JSON.stringify(stops) })
    fetch(`/api/rail-path?${params}`)
      .then(r => r.json())
      .then(path => {
        if (Array.isArray(path) && path.length > 2) {
          railPathCache.set(routeId, path)
          setRealPath(path)
        }
      })
      .catch(() => {})
  }, [routeId, enabled])
  return realPath
}
// ─────────────────────────────────────────────────────────────────────

// ── Path smoothing ────────────────────────────────────────────────────
function catmullRomPt(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t
  return [
    0.5 * (2*p1[0] + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
    0.5 * (2*p1[1] + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3),
  ]
}

function bendTwoPoints(pts) {
  const [a, b] = pts
  const dlat = b[0] - a[0], dlng = b[1] - a[1]
  const len = Math.sqrt(dlat * dlat + dlng * dlng)
  if (len === 0) return pts
  const pl = -dlng / len, pn = dlat / len
  const sign = Math.abs(Math.sin(a[0] * 127.1 + b[1] * 311.7)) > 0.5 ? 1 : -1
  const mag = len * 0.09 * sign
  return [
    a,
    [a[0] + dlat * 0.3 + pl * mag * 0.7, a[1] + dlng * 0.3 + pn * mag * 0.7],
    [a[0] + dlat * 0.7 + pl * mag * 0.9, a[1] + dlng * 0.7 + pn * mag * 0.9],
    b,
  ]
}

function smoothPath(rawPts, n = 10) {
  const pts = rawPts.length === 2 ? bendTwoPoints(rawPts) : rawPts
  if (pts.length < 2) return pts
  const p = [pts[0], ...pts, pts[pts.length - 1]]
  const out = []
  for (let i = 1; i < p.length - 2; i++) {
    for (let j = 0; j < n; j++) out.push(catmullRomPt(p[i-1], p[i], p[i+1], p[i+2], j / n))
  }
  out.push(pts[pts.length - 1])
  return out
}
// ─────────────────────────────────────────────────────────────────────

const PURPLE = '#7744CB'
const RED = '#E53535'
const AMBER = '#F59E0B'
const GOLD = '#EAB308'

function routeColor(route, inTrip, isSaved) {
  if (inTrip) return AMBER
  if (isSaved) return GOLD
  if (route.railaway) return PURPLE
  return RED
}

export function routeMidpoint(route) {
  const path = routePath(route)
  if (!path?.length) return null
  return path[Math.floor(path.length / 2)]
}

export function routePath(route) {
  if (route.stops?.length > 1) {
    const coords = route.stops.map(s => s?.coords).filter(Boolean)
    if (coords.length > 1) return coords
  }
  if (route.fromCoords && route.toCoords) return [route.fromCoords, route.toCoords]
  return null
}

function MapController({ highlightedRoute, onMapReady }) {
  const map = useMap()

  useEffect(() => {
    onMapReady?.(map)
  }, [map])

  useEffect(() => {
    if (!highlightedRoute) return
    const path = routePath(highlightedRoute)
    if (!path?.length) return
    try {
      const bounds = L.latLngBounds(path)
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 12, animate: true, duration: 0.6 })
    } catch {}
  }, [highlightedRoute?.id])

  return null
}

function RouteLayer({ route, inTrip, isSaved, highlighted, onRouteClick }) {
  const rawPath = routePath(route)
  const realPath = useRailPath(route.id, rawPath, highlighted)
  const displayPath = realPath ?? (rawPath ? smoothPath(rawPath) : null)

  if (!displayPath || displayPath.length < 2) return null
  const color = routeColor(route, inTrip, isSaved)
  const handlers = { click: (e) => { e.originalEvent?.stopPropagation(); onRouteClick(route) } }

  const lineOpts = highlighted
    ? { color, weight: 5, dashArray: null, opacity: 1 }
    : { color, weight: 2.5, dashArray: '6 4', opacity: inTrip ? 0.9 : 0.5 }

  return (
    <LayerGroup>
      <Polyline positions={displayPath} pathOptions={lineOpts} eventHandlers={handlers} />

      {route.stops?.filter(s => s?.coords).map((stop, i) => (
        <CircleMarker key={i} center={stop.coords}
          radius={highlighted ? (i === 0 || i === route.stops.length - 1 ? 8 : 5) : 4}
          pathOptions={{ color, fillColor: i === route.stops.length - 1 ? color : 'white', fillOpacity: 1, weight: 2, opacity: highlighted ? 1 : 0.5 }}
          eventHandlers={handlers} />
      ))}

      {!route.stops && route.fromCoords && (
        <>
          <CircleMarker center={route.fromCoords} radius={highlighted ? 8 : 6}
            pathOptions={{ color, fillColor: color, fillOpacity: 1, weight: 2, opacity: highlighted ? 1 : 0.5 }}
            eventHandlers={handlers} />
          <CircleMarker center={route.toCoords} radius={highlighted ? 8 : 6}
            pathOptions={{ color, fillColor: 'white', fillOpacity: 1, weight: 2, opacity: highlighted ? 1 : 0.5 }}
            eventHandlers={handlers} />
        </>
      )}
    </LayerGroup>
  )
}

export default function MapView({ routes = [], tripRouteIds = [], savedRouteIds = [], highlightedRouteId, onRouteClick, onMapReady }) {
  return (
    <MapContainer center={USER_LOCATION} zoom={13}
      style={{ width: '100%', height: '100%' }}
      zoomControl={false} attributionControl={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      <UserLocationMarker />
      <MapController
        highlightedRoute={routes.find(r => r.id === highlightedRouteId)}
        onMapReady={onMapReady}
      />
      {routes.filter(r => r.id !== highlightedRouteId).map(route => (
        <RouteLayer key={route.id} route={route}
          inTrip={tripRouteIds.includes(route.id)}
          isSaved={savedRouteIds.includes(route.id)}
          highlighted={false}
          onRouteClick={onRouteClick} />
      ))}
      {routes.filter(r => r.id === highlightedRouteId).map(route => (
        <RouteLayer key={route.id} route={route}
          inTrip={tripRouteIds.includes(route.id)}
          isSaved={savedRouteIds.includes(route.id)}
          highlighted={true}
          onRouteClick={onRouteClick} />
      ))}
    </MapContainer>
  )
}
