import { useState, useRef, useEffect } from 'react'
import StationSearch from '../components/StationSearch'

const ALL_TAGS = ['Alpen', 'Kustlijn', 'Natuur', 'Stad', 'Nachttrein', 'Panorama']

function StopCard({ stop, index, total, onRemove, onMove }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl border border-outline-variant px-3 py-2.5">
      <span className="material-symbols-outlined text-[#7744cb] flex-shrink-0 text-base">train</span>
      <span className="flex-1 text-sm font-medium text-on-surface truncate">{stop.name}</span>
      <div className="flex flex-col gap-0.5">
        <button
          type="button"
          onClick={() => onMove(index, -1)}
          disabled={index === 0}
          className="w-5 h-5 flex items-center justify-center rounded disabled:opacity-20 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>keyboard_arrow_up</span>
        </button>
        <button
          type="button"
          onClick={() => onMove(index, 1)}
          disabled={index === total - 1}
          className="w-5 h-5 flex items-center justify-center rounded disabled:opacity-20 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>keyboard_arrow_down</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => onRemove(stop.id)}
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 flex-shrink-0"
      >
        <span className="material-symbols-outlined text-rose-400" style={{ fontSize: 16 }}>close</span>
      </button>
    </div>
  )
}

function StopAdder({ stopsList, onAdd, onRemove, onMove }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const timer = useRef(null)
  const skipClose = useRef(false)

  useEffect(() => {
    if (query.length < 2) { setResults([]); setOpen(false); return }
    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/stations?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        const filtered = (Array.isArray(data) ? data.slice(0, 8) : [])
          .filter(s => !stopsList.some(st => st.id === s.id))
        setResults(filtered)
        setOpen(filtered.length > 0)
      } catch { setResults([]) }
      finally { setLoading(false) }
    }, 250)
  }, [query, stopsList])

  const pick = (station) => {
    onAdd(station)
    setQuery('')
    setOpen(false)
    setResults([])
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="text-[12px] font-label font-medium text-on-surface-variant px-1 tracking-widest uppercase">
        Tussenstops
      </label>

      {/* Existing stops */}
      {stopsList.length > 0 && (
        <div className="flex flex-col gap-2">
          {stopsList.map((stop, i) => (
            <StopCard
              key={stop.id}
              stop={stop}
              index={i}
              total={stopsList.length}
              onRemove={onRemove}
              onMove={onMove}
            />
          ))}
        </div>
      )}

      {/* Search input */}
      <div className="relative">
        <div className="flex items-center bg-white border border-outline-variant rounded-xl px-4 h-12 gap-2 focus-within:border-[#7744cb] focus-within:ring-1 focus-within:ring-[#7744cb] transition-all">
          <span className="material-symbols-outlined text-on-surface-variant text-base">add_location</span>
          <input
            className="flex-1 bg-transparent outline-none text-sm text-on-surface placeholder-on-surface-variant/50"
            placeholder="Voeg een tussenstation toe..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onBlur={() => { if (!skipClose.current) setOpen(false) }}
            onFocus={() => { if (results.length > 0) setOpen(true) }}
            autoComplete="off"
          />
          {loading && (
            <span className="material-symbols-outlined text-on-surface-variant text-base" style={{ animation: 'spin 1s linear infinite' }}>autorenew</span>
          )}
        </div>

        {open && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden">
            {results.map(s => (
              <button
                key={s.id}
                type="button"
                className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-[#f3eeff] transition-colors border-b border-gray-50 last:border-0"
                onMouseDown={() => { skipClose.current = true; pick(s); setTimeout(() => { skipClose.current = false }, 100) }}
              >
                <span className="material-symbols-outlined text-[#7744cb] text-lg flex-shrink-0">train</span>
                <span className="font-medium text-sm text-on-surface truncate">{s.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function AddRoute({ onSave, onBack }) {
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [stopsList, setStopsList] = useState([])
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [imgPreview, setImgPreview] = useState(null)
  const [imgBase64, setImgBase64] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const toggleTag = (tag) =>
    setTags(t => t.includes(tag) ? t.filter(x => x !== tag) : [...t, tag])

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setImgBase64(ev.target.result)
      setImgPreview(ev.target.result)
    }
    reader.readAsDataURL(file)
  }

  const addStop = (station) => setStopsList(l => [...l, station])
  const removeStop = (id) => setStopsList(l => l.filter(s => s.id !== id))
  const moveStop = (idx, dir) => {
    setStopsList(l => {
      const next = [...l]
      const swap = idx + dir
      if (swap < 0 || swap >= next.length) return l
      ;[next[idx], next[swap]] = [next[swap], next[idx]]
      return next
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!from || !to) { setError('Selecteer een vertrek- en eindstation.'); return }
    setSaving(true)

    let finalDuration = duration
    if (!finalDuration && from?.id && to?.id) {
      try {
        const res = await fetch(`/api/journeys?from=${from.id}&to=${to.id}`)
        const journeys = await res.json()
        if (Array.isArray(journeys) && journeys[0]) {
          const j = journeys[0]
          const mins = Math.round((new Date(j.arrival) - new Date(j.departure)) / 60000)
          finalDuration = `${Math.floor(mins / 60)}u ${mins % 60}m`
        }
      } catch { /* ignore */ }
    }

    // Build full stops array: from → intermediates → to
    const allStops = [
      { name: from.name, coords: from.location ? [from.location.latitude, from.location.longitude] : null },
      ...stopsList.map(s => ({ name: s.name, coords: s.location ? [s.location.latitude, s.location.longitude] : null })),
      { name: to.name, coords: to.location ? [to.location.latitude, to.location.longitude] : null },
    ]

    onSave({
      from: from.name,
      to: to.name,
      fromCoords: from.location ? [from.location.latitude, from.location.longitude] : null,
      toCoords: to.location ? [to.location.latitude, to.location.longitude] : null,
      stops: allStops,
      duration: finalDuration || '?',
      description,
      tags,
      img: imgBase64,
      likes: 0,
      travelers: 1,
    })
    setSaving(false)
  }

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#f9f9f9]">
      <header className="sticky top-0 z-10 flex items-center gap-3 px-5 pt-safe bg-[#f9f9f9]/90 backdrop-blur-md border-b border-gray-100" style={{ minHeight: '4rem' }}>
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <h1 className="font-headline uppercase text-[26px] leading-none text-on-surface tracking-wide flex-1">
          Route toevoegen
        </h1>
      </header>

      <div className="overflow-y-auto flex-1 px-5 pb-32 pt-6 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        {/* Station timeline */}
        <div className="relative pl-10 space-y-5 before:content-[''] before:absolute before:left-[15px] before:top-5 before:bottom-5 before:w-[2px] before:bg-gray-200">
          <div className="relative">
            <span className="absolute -left-[34px] top-9 w-4 h-4 rounded-full border-2 border-[#7744cb] bg-white z-10" />
            <StationSearch label="Van" placeholder="Vertrekstation zoeken..." value={from} onSelect={setFrom} />
          </div>
          <div className="relative">
            <span className="absolute -left-[34px] top-9 w-4 h-4 rounded-full border-2 border-[#7744cb] bg-[#7744cb] z-10" />
            <StationSearch label="Naar" placeholder="Eindbestemming zoeken..." value={to} onSelect={setTo} />
          </div>
        </div>

        <StopAdder
          stopsList={stopsList}
          onAdd={addStop}
          onRemove={removeStop}
          onMove={moveStop}
        />

        {/* Duration */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-label font-medium text-on-surface-variant px-1 tracking-widest uppercase">
            Duur
          </label>
          <div className="relative">
            <input
              className="w-full h-12 px-4 pr-12 rounded-xl border border-outline-variant bg-white text-sm outline-none focus:border-[#7744cb] focus:ring-1 focus:ring-[#7744cb]"
              placeholder="bijv. 4u 15m  (automatisch als leeg)"
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
            <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant text-base">schedule</span>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-label font-medium text-on-surface-variant px-1 tracking-widest uppercase">
            Beschrijving
          </label>
          <textarea
            className="w-full p-4 rounded-xl border border-outline-variant bg-white text-sm outline-none focus:border-[#7744cb] focus:ring-1 focus:ring-[#7744cb] resize-none"
            placeholder="Vertel iets over het uitzicht, tips voor onderweg..."
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        {/* Photo */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-label font-medium text-on-surface-variant px-1 tracking-widest uppercase">
            Foto
          </label>
          <label className="cursor-pointer">
            <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
            {imgPreview ? (
              <img src={imgPreview} className="w-full aspect-video object-cover rounded-xl" alt="preview" />
            ) : (
              <div className="w-full aspect-video rounded-xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#7744cb]">add_a_photo</span>
                </div>
                <p className="text-xs font-label font-medium">Upload een sfeerbeeld</p>
              </div>
            )}
          </label>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-label font-medium text-on-surface-variant px-1 tracking-widest uppercase">
            Labels
          </label>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className="px-4 py-2 rounded-full text-xs font-label font-medium transition-all active:scale-95"
                style={
                  tags.includes(tag)
                    ? { background: '#7744cb', color: 'white', border: '1px solid #7744cb' }
                    : { background: 'white', color: '#4a4453', border: '1px solid #ccc3d5' }
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={submit}
          disabled={saving}
          className="w-full h-14 rounded-xl text-white font-headline uppercase text-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-lg disabled:opacity-60"
          style={{ background: '#7744cb', boxShadow: '0 8px 24px rgba(119,68,203,0.25)' }}
        >
          <span>{saving ? 'Opslaan...' : 'Deel jouw route'}</span>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  )
}
