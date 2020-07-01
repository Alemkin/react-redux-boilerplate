import { registerOperation } from 'async-operations'
import { authFetch, login } from '../utils/fetch'
import { BASE_API_URL } from '../constants/url'

export const LOGIN_SERVICE = 'LOGIN_SERVICE'

export const service = async (email, password) => {
  const url = BASE_API_URL + '/auth/login'
  const body = { email, password }
  const auth = await authFetch(url, { method: 'POST', body: JSON.stringify(body) }, false)
  if (auth?.user && auth?.tokens) {
    login(auth)
  }
  return auth
}

const mock = request => Promise.resolve({
  user: {
    role: 'admin',
    name: 'Alexander Lemkin',
    email: 'test@alemkin.com',
    id: '123456'
  },
  tokens: {
    access: {
      token: 'testauthtoken',
      expires: '2020-07-01T15:07:23.207Z'
    },
    refresh: {
      token: 'testrefreshtoken',
      expires: '2020-07-15T14:07:23.211Z'
    }
  }
})

export default registerOperation(LOGIN_SERVICE, service, mock)
