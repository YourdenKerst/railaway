import { useState } from 'react'

export default function TripBuilder({ routes, tripRouteIds, onRemove, onClear, onSave }) {
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)

  const legs = tripRouteIds
    .map(id => routes.find(r => r.id === id))
    .filter(Boolean)

  if (tripRouteIds.length === 0) return null

  const totalMins = legs.reduce((sum, r) => {
    const m = r.duration?.match(/(\d+)u\s*(\d+)m/)
    return sum + (m ? +m[1] * 60 + +m[2] : 0)
  }, 0)
  const totalDur = totalMins > 0 ? `${Math.floor(totalMins / 60)}u ${totalMins % 60}m` : null

  const handleSave = () => {
    setSaving(true)
    onSave({
      name: name.trim() || `Reis (${legs.length} trajecten)`,
      routeIds: tripRouteIds,
      legs: legs.map(r => ({ from: r.from, to: r.to, fromCoords: r.fromCoords, toCoords: r.toCoords, duration: r.duration, routeId: r.id })),
      duration: totalDur,
      from: legs[0]?.from,
      to: legs[legs.length - 1]?.to,
      fromCoords: legs[0]?.fromCoords,
      toCoords: legs[legs.length - 1]?.toCoords,
      img: legs[0]?.img,
      likes: 0,
      travelers: 1,
    })
    setSaving(false)
    onClear()
  }

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 w-full max-w-[430px] z-30 bg-white border-t-2 shadow-2xl"
      style={{ bottom: 80, borderColor: '#F59E0B' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-amber-100" style={{ background: '#FFFBEB' }}>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-amber-500 text-lg">route</span>
          <span className="font-bold text-sm text-on-surface">Reisplanner</span>
          <span className="text-xs bg-amber-100 text-amber-700 font-label font-bold px-2 py-0.5 rounded-full">
            {legs.length} {legs.length === 1 ? 'traject' : 'trajecten'}
          </span>
          {totalDur && <span className="text-xs text-on-surface-variant">· {totalDur}</span>}
        </div>
        <button onClick={onClear} className="text-xs text-on-surface-variant hover:text-on-surface px-2 py-1">
          Wis
        </button>
      </div>

      {/* Legs */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {legs.map((r, i) => (
          <div key={r.id} className="flex items-center gap-1 flex-shrink-0">
            <div className="flex items-center gap-1 bg-surface-container rounded-lg px-2 py-1 text-xs">
              <span className="font-medium text-on-surface">{r.from}</span>
              <span className="material-symbols-outlined text-xs text-on-surface-variant">arrow_forward</span>
              <span className="font-medium text-on-surface">{r.to}</span>
              <button onClick={() => onRemove(r.id)} className="ml-1 text-on-surface-variant hover:text-red-500">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>close</span>
              </button>
            </div>
            {i < legs.length - 1 && (
              <span className="material-symbols-outlined text-amber-400" style={{ fontSize: 14 }}>link</span>
            )}
          </div>
        ))}
      </div>

      {/* Save row */}
      <div className="flex gap-2 px-4 pb-3">
        <input
          className="flex-1 h-9 px-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-amber-400"
          placeholder="Geef je reis een naam..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          onClick={handleSave}
          disabled={saving}
          className="h-9 px-4 rounded-lg text-white text-sm font-label font-bold flex items-center gap-1 disabled:opacity-60"
          style={{ background: '#F59E0B' }}
        >
          <span className="material-symbols-outlined text-base">bookmark</span>
          Opslaan
        </button>
      </div>
    </div>
  )
}
