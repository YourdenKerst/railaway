import { useRef, useState } from 'react'

export default function BottomSheet({ children, title, action }) {
  const containerH = document.getElementById('root')?.clientHeight ?? window.innerHeight
  const PEEK = 140
  const MID = Math.round(containerH * 0.48)
  const FULL = Math.round(containerH * 0.82)
  const snaps = [PEEK, MID, FULL]

  const [height, setHeight] = useState(MID)
  const [dragging, setDragging] = useState(false)
  const heightRef = useRef(MID)

  const nearest = (h) =>
    snaps.reduce((best, s, i) =>
      Math.abs(s - h) < Math.abs(snaps[best] - h) ? i : best, 0)

  const startDrag = (startY) => {
    const startH = heightRef.current
    setDragging(true)

    const onMove = (clientY) => {
      const next = Math.min(FULL, Math.max(PEEK, startH + (startY - clientY)))
      heightRef.current = next
      setHeight(next)
    }

    const onEnd = () => {
      const snapped = snaps[nearest(heightRef.current)]
      heightRef.current = snapped
      setHeight(snapped)
      setDragging(false)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }

    const onMouseMove = (e) => onMove(e.clientY)
    const onMouseUp = () => onEnd()
    const onTouchMove = (e) => onMove(e.touches[0].clientY)
    const onTouchEnd = () => onEnd()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
  }

  const handleProps = {
    onMouseDown: (e) => { e.preventDefault(); startDrag(e.clientY) },
    onTouchStart: (e) => startDrag(e.touches[0].clientY),
  }

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-20 bg-surface rounded-t-xl shadow-[0_-8px_24px_rgba(0,0,0,0.08)] border-t border-gray-100 flex flex-col"
      style={{
        height,
        transition: dragging ? 'none' : 'height 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Drag handle */}
      <div className="flex justify-center pt-2 pb-1 flex-shrink-0 cursor-grab select-none" {...handleProps}>
        <div className="w-10 h-1 bg-outline-variant rounded-full" />
      </div>

      {/* Header */}
      <div className="px-5 flex justify-between items-end mb-3 flex-shrink-0 cursor-grab select-none" {...handleProps}>
        <h2 className="font-headline uppercase tracking-wide text-[28px] leading-7 text-on-surface">
          {title}
        </h2>
        {action}
      </div>

      {/* Scrollable list */}
      <div className="overflow-y-auto flex-1 px-5 space-y-3 overscroll-contain" style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))' }}>
        {children}
      </div>
    </div>
  )
}
