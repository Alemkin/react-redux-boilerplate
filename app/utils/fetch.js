import { BASE_API_URL } from '../constants/url'

export const defaultOptions = {
  headers: { Accept: 'application/json', 'Content-Type': 'application/json', Pragma: 'no-cache', mode: 'no-cors' },
  credentials: 'same-origin'
}

export const throwExceptionErrors = response => {
  if (!response?.code) return
  const error = new Error(response.code)
  error.code = response.code ?? ''
  error.message = response.message
  throw error
}

export const deserializeJsonResponse = async (response, defaultReturn = {}) => {
  const text = await response.text()
  return text.length ? JSON.parse(text) : defaultReturn
}

export const AUTH_STORAGE_KEY = 'REACT_JWT_CREDENTIALS'
const SESSION_REFRESH_INTERVAL_IN_MINUTES = 5
let lastRefreshTime = new Date().getTime()

export const authFetch = async (url, options, needsAuth = true) => {
  if (!needsAuth) {
    return await callFetch('', url, options)
  }

  const currentTime = new Date().getTime()

  const auth = getAuth()
  if (!auth?.tokens?.length || !auth?.tokens?.access || !auth?.tokens?.refresh) {
    logout()
    return
  }

  const expiresTime = new Date(auth.tokens.access.expires).getTime()
  if (currentTime > expiresTime) {
    logout()
    return
  }

  const diff = Math.abs(currentTime - lastRefreshTime)
  const diffInMinutes = Math.floor((diff / 1000) / 60)
  lastRefreshTime = currentTime
  if (diffInMinutes >= SESSION_REFRESH_INTERVAL_IN_MINUTES) {
    try {
      const opts = {
        method: 'POST',
        body: JSON.stringify({
          refreshToken: auth.tokens.refresh
        })
      }
      const tokens = await callFetch('', BASE_API_URL + '/auth/refresh-tokens', opts)
      auth.tokens = tokens
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth))
    } catch (error) {
      console.log('Problem refreshing session: ', error)
      logout()
    }
  }
  return await callFetch(auth.tokens.access, url, options)
}

const callFetch = async (accessToken, url, providedOptions) => {
  const defaultOpts = defaultOptions
  if (accessToken) {
    defaultOpts.headers.Authorization = `Bearer ${accessToken}`
  }
  const options = {
    ...defaultOpts,
    ...providedOptions
  }
  const response = await window.fetch(url, options)
  const deserializedResponse = await deserializeJsonResponse(response)
  throwExceptionErrors(deserializedResponse)
  return deserializedResponse
}

export const logout = (redirect = { route: '/login', shouldRedirect: true }) => {
  window.localStorage.removeItem(AUTH_STORAGE_KEY)
  if (!redirect.shouldRedirect) return
  window.location.href = redirect.route
}

export const login = (authObject, redirect = { route: '/', shouldRedirect: true }) => {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authObject))
  if (!redirect.shouldRedirect) return
  window.location.href = redirect.route
}

export const setTokens = (tokens) => {
  const auth = getAuth()
  auth.tokens = tokens
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth))
}

export const getAuth = () => {
  const auth = JSON.parse(window.localStorage.getItem(AUTH_STORAGE_KEY) || '{}')
  if (!auth?.tokens?.access) return null
  return auth
}

export const getInitialState = () => {
  const initialAuth = getAuth()
  const initialState = {}
  if (!initialAuth?.user || !initialAuth?.tokens?.access?.expires) return initialState
  const currentTime = new Date().getTime()
  const expTime = new Date(initialAuth.tokens.access.expires).getTime()
  if (currentTime < expTime) {
    initialState.auth = { ...initialAuth, error: { code: 0, value: '' }, loadingLogin: false }
  } else {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
  }
  return initialState
}
