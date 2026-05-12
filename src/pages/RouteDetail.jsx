const placeholder = 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80'

function StopItem({ stop, index, total }) {
  return (
    <div className="relative pl-10">
      {/* Timeline line */}
      {index < total - 1 && (
        <div className="absolute left-[19px] top-6 bottom-0 w-[2px] bg-gray-100" />
      )}
      {/* Dot */}
      <div
        className="absolute left-3 top-1 w-5 h-5 rounded-full flex items-center justify-center z-10"
        style={{
          background: stop.mustSee ? '#7744cb' : 'white',
          border: '2px solid #7744cb',
        }}
      >
        {stop.mustSee && (
          <span className="material-symbols-outlined text-white" style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}>star</span>
        )}
      </div>

      <div className="pb-6">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-sm text-on-surface">{stop.name}</h3>
          {stop.mustSee && (
            <span className="text-[9px] font-label font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">MUST-SEE</span>
          )}
        </div>
        <p className="text-xs text-on-surface-variant mb-2">{stop.summary}</p>
        {stop.highlights?.length > 0 && (
          <ul className="space-y-1">
            {stop.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-on-surface">
                <span className="material-symbols-outlined text-[#7744cb] flex-shrink-0 mt-0.5" style={{ fontSize: 14 }}>arrow_right</span>
                {h}
              </li>
            ))}
          </ul>
        )}
        <span className="text-[10px] text-on-surface-variant mt-2 block font-label">{stop.type}</span>
      </div>
    </div>
  )
}

export default function RouteDetail({ route, onBack, saved, onToggleSave }) {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f9f9f9]">
      {/* Hero image with back + save overlay */}
      <div className="relative flex-shrink-0 h-52">
        <img
          src={route.img || placeholder}
          alt={route.title || `${route.from} → ${route.to}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <button
          onClick={onToggleSave}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: saved ? '#7744cb' : 'rgba(255,255,255,0.9)' }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: saved ? 'white' : '#7744cb', fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
          >
            bookmark
          </span>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto flex-1 pb-8">
        {/* Route header */}
        <div className="px-5 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              {route.railaway && (
                <span className="text-[10px] font-label font-bold bg-[#7744cb] text-white px-2 py-0.5 rounded mr-2">RAILAWAY</span>
              )}
              {route.userAdded && (
                <span className="text-[10px] font-label font-bold bg-surface-container text-on-surface-variant px-2 py-0.5 rounded mr-2">COMMUNITY</span>
              )}
            </div>
          </div>
          <h1 className="font-headline uppercase text-[26px] leading-tight text-on-surface">
            {route.title || `${route.from} → ${route.to}`}
          </h1>
          <div className="flex items-center gap-4 mt-2 text-on-surface-variant text-sm">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">schedule</span>
              {route.duration}
            </span>
            <span className="flex items-center gap-1 text-rose-500">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span className="font-bold">{route.likes ?? 0}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">person</span>
              {route.travelers ?? 1} reizigers
            </span>
          </div>
          {route.description && (
            <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">{route.description}</p>
          )}
          {route.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {route.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-label font-medium px-3 py-1 rounded-full border border-[#7744cb]/30 text-[#7744cb] bg-[#7744cb]/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Stops */}
        {route.stops?.length > 0 && (
          <div className="px-5 pt-5">
            <h2 className="font-headline uppercase text-[18px] text-on-surface mb-4">Stations & Stops</h2>
            {route.stops.map((stop, i) => (
              typeof stop === 'string'
                ? (
                  <div key={i} className="relative pl-10 pb-4">
                    {i < route.stops.length - 1 && <div className="absolute left-[19px] top-6 bottom-0 w-[2px] bg-gray-100" />}
                    <div className="absolute left-3 top-1 w-5 h-5 rounded-full border-2 border-[#7744cb] bg-white" />
                    <p className="font-bold text-sm text-on-surface pt-0.5">{stop}</p>
                  </div>
                )
                : <StopItem key={i} stop={stop} index={i} total={route.stops.length} />
            ))}
          </div>
        )}

        {/* No stops for user routes */}
        {!route.stops?.length && (
          <div className="px-5 pt-5 text-sm text-on-surface-variant">
            {route.description ? null : 'Geen extra informatie beschikbaar.'}
          </div>
        )}
      </div>
    </div>
  )
}
