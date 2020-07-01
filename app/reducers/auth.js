import loginService from '../service/login'
import refreshTokensService from '../service/refreshTokens'
import { createSelector } from 'reselect'

const initialError = {
  code: 0,
  value: ''
}

const initialState = {
  user: {
    role: '',
    name: '',
    email: '',
    id: ''
  },
  tokens: {
    access: {
      token: '',
      expires: ''
    },
    refresh: {
      token: '',
      expires: ''
    }
  },
  error: initialError,
  loadingLogin: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case loginService.OPERATION: return loginOperation(state, action)
    case loginService.COMPLETE: return loginResult(state, action)
    case loginService.FAILURE: return loginError(state, action)
    case refreshTokensService.COMPLETE: return refreshTokensResult(state, action)
    default: return state
  }
}

const loginOperation = (state, action) => ({
  ...state,
  error: initialError,
  loadingLogin: true
})

const loginResult = (state, action) => {
  const auth = action.response || {}
  return {
    ...state,
    user: auth.user ?? {},
    tokens: auth.tokens ?? {},
    error: initialError,
    loadingLogin: false
  }
}

const loginError = (state, action) => ({
  ...state,
  error: action.error,
  loadingLogin: false
})

const refreshTokensResult = (state, action) => {
  const tokens = action.response || {}
  return {
    ...state,
    tokens: tokens ?? {}
  }
}

export const selectAuth = createSelector(
  state => state.auth,
  auth => auth
)
