import { useEffect, useCallback } from 'react'
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
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 10, animate: true, duration: 0.6 })
    } catch {}
  }, [highlightedRoute?.id])

  return null
}

function RouteLayer({ route, inTrip, isSaved, highlighted, onRouteClick }) {
  const path = routePath(route)
  if (!path || path.length < 2) return null
  const color = routeColor(route, inTrip, isSaved)
  const handlers = { click: (e) => { e.originalEvent?.stopPropagation(); onRouteClick(route) } }

  const lineOpts = highlighted
    ? { color, weight: 5, dashArray: null, opacity: 1 }
    : { color, weight: 2.5, dashArray: '6 4', opacity: inTrip ? 0.9 : 0.5 }

  return (
    <LayerGroup>
      <Polyline positions={path} pathOptions={lineOpts} eventHandlers={handlers} />

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
