const ITEMS = [
  { icon: 'map', label: 'Kaart', id: 'kaart' },
  { icon: 'explore', label: 'Ontdek', id: 'ontdek' },
  { icon: 'add', label: '', id: 'toevoegen' },
  { icon: 'bookmark', label: 'Opgeslagen', id: 'opgeslagen' },
  { icon: 'person', label: 'Profiel', id: 'profiel' },
]

function Icon({ name, fill = false, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      {name}
    </span>
  )
}

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 flex justify-around items-center px-5 pt-2 pb-6 bg-white/90 backdrop-blur-xl border-t border-gray-100">
      {ITEMS.map(item => {
        if (item.id === 'toevoegen') {
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg active:scale-90 transition-transform -mt-6"
              style={{ background: '#7744cb', color: 'white' }}
            >
              <Icon name="add" className="text-[28px]" />
            </button>
          )
        }
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className="flex flex-col items-center justify-center gap-0.5 transition-transform active:scale-90"
            style={{ color: isActive ? '#7744cb' : '#5f5e5e' }}
          >
            <Icon name={item.icon} fill={isActive} />
            <span className="text-[10px] font-label font-bold">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
