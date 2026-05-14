import { useState, useRef, useEffect, useCallback, Suspense, lazy } from 'react'
import BottomSheet from './components/BottomSheet'
import BottomNav from './components/BottomNav'
import RouteCard from './components/RouteCard'
import TripBuilder from './components/TripBuilder'
import AddRoute from './pages/AddRoute'
import RouteDetail from './pages/RouteDetail'
import Discover from './pages/Discover'
import { useRoutes } from './hooks/useRoutes'
import { useSaved } from './hooks/useSaved'
import { useTrips } from './hooks/useTrips'
import { RAILAWAY_ROUTES } from './data/railawayRoutes'
import { COMMUNITY_ROUTES } from './data/communityRoutes'
import { routeMidpoint } from './components/MapView'
import logoImg from './assets/rail_away_go_logo trans.png'
import './index.css'

const MapView = lazy(() => import('./components/MapView'))

function coordDist(a, b) {
  if (!a || !b) return Infinity
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
}

function Icon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>
}

// Tooltip card rendered absolutely over the map
function MapTooltip({ route, pos, showBelow, onOpen, onClose }) {
  if (!route || !pos) return null
  return (
    // Invisible full-area backdrop to catch outside taps
    <div className="absolute inset-0 z-[25]" style={{ pointerEvents: 'none' }}>
      <div
        style={{ position: 'absolute', left: pos.x, top: pos.y, pointerEvents: 'auto', width: 240,
          transform: showBelow ? 'translate(-50%, 12px)' : 'translate(-50%, calc(-100% - 12px))',
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))',
        }}
      >
        {/* Arrow */}
        {!showBelow && (
          <div style={{ position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%) rotate(45deg)',
            width: 14, height: 14, background: 'white', borderRight: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }} />
        )}
        {showBelow && (
          <div style={{ position: 'absolute', top: -7, left: '50%', transform: 'translateX(-50%) rotate(45deg)',
            width: 14, height: 14, background: route.img ? 'transparent' : 'white',
            borderLeft: '1px solid #f3f4f6', borderTop: '1px solid #f3f4f6' }} />
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {route.img && <img src={route.img} alt="" className="w-full h-24 object-cover" />}
          <div className="px-3 pt-2 pb-3">
            <div className="flex gap-1 flex-wrap mb-1">
              {route.railaway && <span className="text-[9px] font-label font-bold bg-[#7744cb] text-white px-1.5 py-0.5 rounded">RAILAWAY</span>}
              {route.userAdded && <span className="text-[9px] font-label font-bold bg-[#E53535] text-white px-1.5 py-0.5 rounded">COMMUNITY</span>}
            </div>
            <p className="font-bold text-sm text-on-surface leading-tight">
              {route.title || `${route.from} → ${route.to}`}
            </p>
            <div className="flex items-center gap-3 mt-1 text-on-surface-variant" style={{ fontSize: 11 }}>
              <span className="flex items-center gap-0.5"><Icon name="schedule" className="text-xs" />{route.duration}</span>
              <span className="flex items-center gap-0.5 text-rose-500">
                <Icon name="favorite" className="text-xs" style={{ fontVariationSettings: "'FILL' 1" }} />
                <span className="font-bold">{route.likes ?? 0}</span>
              </span>
              {route.stops?.length > 0 && <span className="flex items-center gap-0.5"><Icon name="place" className="text-xs" />{route.stops.length}</span>}
            </div>
            <button
              onClick={onOpen}
              className="mt-2 w-full h-8 rounded-lg text-white font-label font-bold flex items-center justify-center gap-1"
              style={{ background: '#7744cb', fontSize: 12 }}
            >
              <Icon name="open_in_full" className="text-sm" />
              Bekijk route
            </button>
          </div>
        </div>
      </div>

      {/* Full-area close tap */}
      <div className="absolute inset-0" style={{ zIndex: -1, pointerEvents: 'auto' }} onClick={onClose} />
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('map')
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [mapTooltip, setMapTooltip] = useState(null)
  const [tooltipPos, setTooltipPos] = useState(null)
  const [tooltipBelow, setTooltipBelow] = useState(false)
  const [search, setSearch] = useState('')
  const [tripMode, setTripMode] = useState(false)
  const [tripRouteIds, setTripRouteIds] = useState([])

  const mapRef = useRef(null)
  const mapContainerRef = useRef(null)

  const { userRoutes, addRoute, deleteRoute } = useRoutes()
  const { isSaved, toggle: toggleSave } = useSaved()
  const { trips, saveTrip, deleteTrip } = useTrips()

  const allRoutes = [...userRoutes, ...RAILAWAY_ROUTES, ...COMMUNITY_ROUTES]
  const allWithTrips = [...trips, ...allRoutes]

  // Compute tooltip pixel position from lat/lng midpoint
  const computeTooltipPos = useCallback((route) => {
    const map = mapRef.current
    const container = mapContainerRef.current
    if (!map || !container || !route) return
    const mid = routeMidpoint(route)
    if (!mid) return
    try {
      const pt = map.latLngToContainerPoint([mid[0], mid[1]])
      setTooltipPos({ x: pt.x, y: pt.y })
      setTooltipBelow(pt.y < 180)
    } catch {}
  }, [])

  // Recompute on map move/zoom
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapTooltip) return
    const update = () => computeTooltipPos(mapTooltip)
    map.on('move zoom moveend', update)
    return () => map.off('move zoom moveend', update)
  }, [mapTooltip, computeTooltipPos])

  // Recompute after fitBounds animation finishes (~700ms)
  useEffect(() => {
    if (!mapTooltip) { setTooltipPos(null); return }
    const t = setTimeout(() => computeTooltipPos(mapTooltip), 750)
    return () => clearTimeout(t)
  }, [mapTooltip, computeTooltipPos])

  // Trip filtering
  const lastTripRoute = tripRouteIds.length > 0
    ? allRoutes.find(r => r.id === tripRouteIds[tripRouteIds.length - 1])
    : null

  const tripFilteredRoutes = lastTripRoute
    ? allRoutes.filter(r => tripRouteIds.includes(r.id) || coordDist(r.fromCoords, lastTripRoute.toCoords) < 0.6)
    : allRoutes

  const matchesSearch = (r) => {
    if (!search) return true
    const q = search.toLowerCase()
    return r.from?.toLowerCase().includes(q) ||
      r.to?.toLowerCase().includes(q) ||
      r.title?.toLowerCase().includes(q) ||
      r.name?.toLowerCase().includes(q)
  }

  const listRoutes = tripMode
    ? tripFilteredRoutes.filter(matchesSearch)
    : allWithTrips.filter(matchesSearch)

  const savedItems = allWithTrips.filter(r => isSaved(r.id))

  const toggleTripRoute = (id) => setTripRouteIds(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])

  const handleSaveTrip = (trip) => {
    const saved = { ...trip, id: Date.now() }
    saveTrip(saved)
    toggleSave(saved.id)
    setTripMode(false)
    setTripRouteIds([])
    setPage('saved')
  }

  const showTooltip = (route) => {
    if (mapTooltip?.id === route.id) { setMapTooltip(null); return }
    setMapTooltip(route)
    setTooltipPos(null) // will recompute after fitBounds
  }

  const openDetail = (route, from = 'map') => {
    setMapTooltip(null)
    setTooltipPos(null)
    setSelectedRoute({ ...route, _from: from })
    setPage('detail')
  }

  const handleNav = (id) => {
    if (id === 'toevoegen') { setPage('add'); return }
    if (id === 'opgeslagen') { setPage('saved'); return }
    if (id === 'ontdek') { setPage('discover'); return }
    setPage('map')
  }

  const activeNav = page === 'add' ? 'toevoegen' : page === 'saved' ? 'opgeslagen' : page === 'discover' ? 'ontdek' : 'kaart'

  // ── Pages ──────────────────────────────────────────────

  if (page === 'discover') return (
    <div className="flex flex-col h-full">
      <Discover
        userRoutes={userRoutes}
        isSaved={isSaved}
        onToggleSave={toggleSave}
        onOpenRoute={route => openDetail(route, 'discover')}
      />
      <BottomNav active={activeNav} onChange={handleNav} />
    </div>
  )

  if (page === 'add') return (
    <div className="h-full">
      <AddRoute onSave={r => { addRoute(r); setPage('map') }} onBack={() => setPage('map')} />
    </div>
  )

  if (page === 'detail' && selectedRoute) return (
    <div className="h-full">
      <RouteDetail
        route={selectedRoute}
        onBack={() => setPage(selectedRoute._from || 'map')}
        saved={isSaved(selectedRoute.id)}
        onToggleSave={() => toggleSave(selectedRoute.id)}
      />
    </div>
  )

  if (page === 'saved') return (
    <div className="flex flex-col h-full bg-[#f9f9f9]">
      <header className="flex items-center px-5 h-16 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-gray-100 flex-shrink-0">
        <h1 className="font-headline uppercase text-[26px] leading-none text-on-surface tracking-wide">Opgeslagen</h1>
      </header>
      <div className="overflow-y-auto flex-1 px-5 pt-4 pb-28 space-y-3">
        {savedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-on-surface-variant">
            <Icon name="bookmark" className="text-5xl text-outline-variant mb-3" />
            <p className="text-sm font-medium">Nog niets opgeslagen</p>
            <p className="text-xs mt-1 text-center px-8">Sla routes op via het bookmark-icoon, of bouw een reis via de reisplanner</p>
          </div>
        ) : savedItems.map(route => (
          <RouteCard key={route.id} route={route} saved={true}
            onSave={() => toggleSave(route.id)}
            onDelete={
              route.type === 'trip' ? () => { deleteTrip(route.id); toggleSave(route.id) }
              : route.userAdded ? () => { deleteRoute(route.id); toggleSave(route.id) }
              : undefined
            }
            onClick={() => openDetail(route, 'saved')} />
        ))}
      </div>
      <BottomNav active={activeNav} onChange={handleNav} />
    </div>
  )

  // ── Map (default) ──────────────────────────────────────

  return (
    <div className="relative flex flex-col h-full overflow-hidden text-on-surface">

      {/* Map layer */}
      <div ref={mapContainerRef} className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-surface-container" />}>
          <MapView
            routes={allRoutes}
            tripRouteIds={tripRouteIds}
            savedRouteIds={savedItems.map(r => r.id)}
            highlightedRouteId={mapTooltip?.id}
            onRouteClick={showTooltip}
            onMapReady={map => { mapRef.current = map }}
          />
        </Suspense>
      </div>

      {/* Tooltip sits above the bottom sheet (z-25 > z-20) */}
      <MapTooltip
        route={mapTooltip}
        pos={tooltipPos}
        showBelow={tooltipBelow}
        onOpen={() => openDetail(mapTooltip)}
        onClose={() => setMapTooltip(null)}
      />

      {/* Search bar + logo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-5 pt-6 z-20 flex items-center gap-3">
        {/* Railaway logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-md">
          <img src={logoImg} alt="Rail aWay Go" className="w-[96px] h-[96px] object-contain" />
        </div>
        <div className="flex-1 flex items-center bg-white/90 backdrop-blur-md rounded-xl px-4 h-14 shadow-sm border border-gray-100">
          <Icon name="search" className="mr-3 text-[#7744cb]" />
          <input
            className="bg-transparent border-none outline-none w-full text-sm text-on-surface placeholder-on-surface-variant/50"
            placeholder="Zoek een route..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button onClick={() => setSearch('')}><Icon name="close" className="ml-2 text-on-surface-variant text-sm" /></button>}
          <button
            onClick={() => { setTripMode(t => !t); if (tripMode) setTripRouteIds([]) }}
            className="ml-2 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-label font-bold"
            style={tripMode ? { background: '#F59E0B', color: 'white' } : { color: '#7744cb' }}
          >
            <Icon name="route" className="text-base" />
            {tripMode ? 'Stop' : 'Plan'}
          </button>
        </div>
      </div>

      <TripBuilder
        routes={allRoutes}
        tripRouteIds={tripRouteIds}
        onRemove={id => setTripRouteIds(p => p.filter(x => x !== id))}
        onClear={() => { setTripRouteIds([]); setTripMode(false) }}
        onSave={handleSaveTrip}
      />

      <BottomSheet
        title={tripMode ? (lastTripRoute ? `Aansluitend op ${lastTripRoute.to}` : 'Kies eerste traject') : search ? `Resultaten (${listRoutes.length})` : 'Routes'}
        action={!tripMode && <button className="text-[#7744cb] text-xs font-label font-medium mb-1" onClick={() => setPage('add')}>+ Voeg toe</button>}
      >
        {tripMode && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-3 text-xs text-amber-800 flex items-start gap-2">
            <Icon name="info" className="text-amber-500 text-base flex-shrink-0 mt-0.5" />
            <span>{lastTripRoute ? <>Alleen routes die vertrekken vanuit <strong>{lastTripRoute.to}</strong>.</> : <>Tik <strong>+</strong> op een traject om je reis te starten.</>}</span>
          </div>
        )}
        {listRoutes.length === 0 ? (
          <div className="text-center py-8 text-on-surface-variant text-sm">
            {tripMode ? `Geen aansluitende routes gevonden vanuit ${lastTripRoute?.to}` : 'Geen routes gevonden'}
          </div>
        ) : listRoutes.map(route => (
          <RouteCard
            key={route.id}
            route={route}
            saved={isSaved(route.id)}
            onSave={() => toggleSave(route.id)}
            onDelete={
              route.type === 'trip' ? () => { deleteTrip(route.id); if (isSaved(route.id)) toggleSave(route.id) }
              : route.userAdded ? () => deleteRoute(route.id)
              : undefined
            }
            onClick={() => { if (tripMode) return; showTooltip(route) }}
            tripMode={tripMode}
            inTrip={tripRouteIds.includes(route.id)}
            onAddToTrip={() => toggleTripRoute(route.id)}
            highlighted={mapTooltip?.id === route.id}
          />
        ))}
      </BottomSheet>

      <BottomNav active={activeNav} onChange={handleNav} />
    </div>
  )
}
