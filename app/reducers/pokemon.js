import { GET_POKEMON } from '../constants/serviceTypes'
import { actionTypes as asyncTypes, isAsyncOperation, isAsyncComplete, isAsyncFailure } from 'async-ops'

const initialError = {
  code: '',
  message: '',
  values: []
}

const initialState = {
  loading: false,
  error: initialError,
  name: '',
  weight: 0,
  id: 0,
  order: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case asyncTypes.OPERATION:
    case asyncTypes.COMPLETE:
    case asyncTypes.FAILURE:
      if (isAsyncOperation(GET_POKEMON)(action)) return getPokemon(state, action)
      if (isAsyncComplete(GET_POKEMON)(action)) return getPokemonResult(state, action)
      if (isAsyncFailure(GET_POKEMON)(action)) return getPokemonError(state, action)
      return state
    default: return state
  }
}

const getPokemon = (state, action) => ({
  ...state,
  loading: true
})

const getPokemonResult = (state, action) => {
  const p = action.response || {}
  return {
    ...state,
    loading: false,
    name: p.name || '',
    weight: p.weight || 0,
    id: p.id || 0,
    order: p.order || 0
  }
}

const getPokemonError = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
})
