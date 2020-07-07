const STORAGE_KEY = 'apertum:storage'

export function persist(state = {}) {
  const { auth } = state
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ auth }))
}

export function hydrate() {
  const stored = window.localStorage.getItem(STORAGE_KEY) || '{}'
  return JSON.parse(stored)
}
