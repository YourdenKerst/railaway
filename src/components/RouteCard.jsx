const PLACEHOLDER = 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80'

export default function RouteCard({ route, onClick, onSave, saved, tripMode, inTrip, onAddToTrip, onDelete, highlighted }) {
  return (
    <div
      onClick={onClick}
      className="flex gap-3 bg-white rounded-xl border overflow-hidden active:scale-[0.98] transition-all cursor-pointer relative"
      style={{
        borderColor: highlighted ? '#7744cb' : inTrip ? '#F59E0B' : '#f3f4f6',
        borderWidth: highlighted || inTrip ? 2 : 1,
        boxShadow: highlighted ? '0 4px 20px rgba(119,68,203,0.18)' : undefined,
      }}
    >
      <img
        src={route.img || PLACEHOLDER}
        alt={`${route.from} → ${route.to}`}
        className="w-24 h-24 object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-center py-3 pr-10 flex-1 min-w-0">
        <div className="flex items-start gap-1 mb-0.5 flex-wrap">
          {route.railaway && (
            <span className="text-[9px] font-label font-bold bg-[#7744cb] text-white px-1.5 py-0.5 rounded flex-shrink-0">RAILAWAY</span>
          )}
          {(route.userAdded || route.communityPost) && (
            <span className="text-[9px] font-label font-bold bg-[#E53535] text-white px-1.5 py-0.5 rounded flex-shrink-0">COMMUNITY</span>
          )}
          {route.type === 'trip' && (
            <span className="text-[9px] font-label font-bold bg-amber-400 text-white px-1.5 py-0.5 rounded flex-shrink-0">REIS</span>
          )}
          <h3 className="font-bold text-sm text-on-surface leading-tight truncate">
            {route.title || route.name || `${route.from} → ${route.to}`}
          </h3>
        </div>
        <div className="flex items-center text-on-surface-variant text-xs mt-1">
          <span className="material-symbols-outlined text-sm mr-1">schedule</span>
          {route.duration}
        </div>
        {route.type === 'trip' && route.legs?.length > 0 && (
          <div className="text-xs text-on-surface-variant mt-1">{route.legs.length} trajecten gekoppeld</div>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-rose-500">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            <span className="text-xs font-label font-bold">{route.likes ?? 0}</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant text-[10px] font-label">
            <span className="material-symbols-outlined text-sm">person</span>
            {route.travelers ?? 1}
          </div>
        </div>
      </div>

      {/* Action buttons stack */}
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        {/* Bookmark */}
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full transition-colors"
          style={{ background: saved ? '#7744cb' : 'rgba(255,255,255,0.92)' }}
          onClick={e => { e.stopPropagation(); onSave?.() }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 14, color: saved ? 'white' : '#7744cb', fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
            bookmark
          </span>
        </button>

        {/* Trip add/remove */}
        {tripMode && route.type !== 'trip' && (
          <button
            className="w-7 h-7 flex items-center justify-center rounded-full"
            style={{ background: inTrip ? '#F59E0B' : 'rgba(255,255,255,0.92)' }}
            onClick={e => { e.stopPropagation(); onAddToTrip?.() }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: inTrip ? 'white' : '#F59E0B' }}>
              {inTrip ? 'remove' : 'add'}
            </span>
          </button>
        )}

        {/* Delete — for user-added routes and trips */}
        {(route.userAdded || route.type === 'trip') && onDelete && !tripMode && (
          <button
            className="w-7 h-7 flex items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.92)' }}
            onClick={e => { e.stopPropagation(); onDelete() }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#E53535' }}>delete</span>
          </button>
        )}
      </div>
    </div>
  )
}
