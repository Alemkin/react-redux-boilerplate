export const defaultOptions = {
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  credentials: 'same-origin'
}

export const throwExceptionErrors = response => {
  if (!response || !response.code) return
  const error = new Error(response.code)
  error.code = response.code || ''
  error.message = response.message || ''
  error.values = response.values || []
  throw error
}

export const deserializeJsonResponse = async response => response.json()
