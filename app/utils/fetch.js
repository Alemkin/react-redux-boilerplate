// TODO Authorization: 'Bearer ' + authenticationToken
export const defaultOptions = {
  headers: { Accept: 'application/json', 'Content-Type': 'application/json', Pragma: 'no-cache' },
  credentials: 'same-origin'
}

export const throwExceptionErrors = response => {
  if (!response?.code) return
  const error = new Error(response.code)
  error.code = response.code ?? ''
  error.values = response.values || [response.message]
  throw error
}

export const deserializeJsonResponse = async (response, defaultReturn = {}) => {
  const text = await response.text()
  return text.length ? JSON.parse(text) : defaultReturn
}
