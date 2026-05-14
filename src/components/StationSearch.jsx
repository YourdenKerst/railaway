import { useState, useEffect, useRef } from 'react'

export default function StationSearch({ label, placeholder, value, onSelect }) {
  const [query, setQuery] = useState(value?.name || '')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const timer = useRef(null)
  const skipClose = useRef(false)
  const justPicked = useRef(false)

  useEffect(() => {
    if (justPicked.current) { justPicked.current = false; return }
    if (query.length < 2) { setResults([]); setOpen(false); return }
    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/stations?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        const list = Array.isArray(data) ? data.slice(0, 8) : []
        setResults(list)
        setOpen(list.length > 0)
      } catch { setResults([]) }
      finally { setLoading(false) }
    }, 250)
  }, [query])

  const pick = (station) => {
    justPicked.current = true
    setQuery(station.name)
    setOpen(false)
    setResults([])
    onSelect(station)
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-label font-bold text-on-surface-variant px-1 tracking-widest uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full h-12 px-4 rounded-xl border border-outline-variant bg-white text-sm outline-none focus:border-[#7744cb] focus:ring-1 focus:ring-[#7744cb] transition-all"
          placeholder={placeholder}
          value={query}
          onChange={e => { setQuery(e.target.value); if (!e.target.value) onSelect(null) }}
          onBlur={() => { if (!skipClose.current) setOpen(false) }}
          onFocus={() => { if (results.length > 0) setOpen(true) }}
          autoComplete="off"
        />
        {loading && (
          <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant text-base" style={{ animation: 'spin 1s linear infinite' }}>
            autorenew
          </span>
        )}
        {!loading && value && (
          <span className="material-symbols-outlined absolute right-3 top-3 text-green-500 text-base">
            check_circle
          </span>
        )}

        {/* Dropdown */}
        {open && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">
            {results.map(s => (
              <button
                key={s.id}
                className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-[#f3eeff] transition-colors border-b border-gray-50 last:border-0"
                onMouseDown={() => { skipClose.current = true; pick(s); setTimeout(() => { skipClose.current = false }, 100) }}
              >
                <span className="material-symbols-outlined text-[#7744cb] text-lg flex-shrink-0">train</span>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-on-surface truncate">{s.name}</div>
                  {s.location && (
                    <div className="text-xs text-on-surface-variant">
                      {s.location.latitude?.toFixed(3)}°N, {s.location.longitude?.toFixed(3)}°E
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
