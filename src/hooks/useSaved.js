import { useState } from 'react'

const KEY = 'railaway_saved'

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] }
  catch { return [] }
}

export function useSaved() {
  const [savedIds, setSavedIds] = useState(load)

  const toggle = (id) => {
    const next = savedIds.includes(id)
      ? savedIds.filter(x => x !== id)
      : [...savedIds, id]
    setSavedIds(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const isSaved = (id) => savedIds.includes(id)

  return { savedIds, toggle, isSaved }
}
