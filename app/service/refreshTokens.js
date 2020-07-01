import { registerOperation } from 'async-operations'
import { authFetch, setTokens, getAuth } from '../utils/fetch'
import { BASE_API_URL } from '../constants/url'

export const REFRESH_AUTH_TOKEN_SERVICE = 'REFRESH_AUTH_TOKEN_SERVICE'

export const service = async () => {
  const url = BASE_API_URL + '/auth/refresh-tokens'
  const auth = getAuth()
  if (!auth?.tokens?.refresh?.token) return {}
  const now = new Date().getTime()
  if (now > new Date(auth?.tokens?.access?.expires).getTime()) return {}
  if (now > new Date(auth?.tokens?.refresh?.expires).getTime()) return {}
  const body = { refreshToken: auth.tokens.refresh.token }
  const tokens = await authFetch(url, { method: 'POST', body: JSON.stringify(body) }, false)
  setTokens(tokens)
  return tokens
}

const mock = request => Promise.resolve({
  access: {
    token: 'testauthtokenrefreshed',
    expires: '2020-07-02T15:07:23.207Z'
  },
  refresh: {
    token: 'testrefreshtokenrefreshed',
    expires: '2020-07-16T14:07:23.211Z'
  }
})

export default registerOperation(REFRESH_AUTH_TOKEN_SERVICE, service, mock)
