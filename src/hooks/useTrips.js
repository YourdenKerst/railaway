import { useState } from 'react'

const KEY = 'railaway_trips'

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] }
  catch { return [] }
}

export function useTrips() {
  const [trips, setTrips] = useState(load)

  const saveTrip = (trip) => {
    const next = [{ ...trip, id: Date.now(), type: 'trip' }, ...trips]
    setTrips(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const deleteTrip = (id) => {
    const next = trips.filter(t => t.id !== id)
    setTrips(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  return { trips, saveTrip, deleteTrip }
}
