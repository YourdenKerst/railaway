export async function searchStations(query) {
  const res = await fetch(`/api/stations?q=${encodeURIComponent(query)}`)
  return res.json()
}

export async function searchJourneys(fromId, toId, date = new Date()) {
  const res = await fetch(
    `/api/journeys?from=${fromId}&to=${toId}&date=${date.toISOString()}`
  )
  return res.json()
}
