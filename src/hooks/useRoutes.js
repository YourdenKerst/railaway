import { useState } from 'react'

const KEY = 'railaway_routes'

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] }
  catch { return [] }
}

export function useRoutes() {
  const [userRoutes, setUserRoutes] = useState(load)

  const addRoute = (route) => {
    const next = [{ ...route, id: Date.now(), userAdded: true }, ...userRoutes]
    setUserRoutes(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const deleteRoute = (id) => {
    const next = userRoutes.filter(r => r.id !== id)
    setUserRoutes(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  return { userRoutes, addRoute, deleteRoute }
}
