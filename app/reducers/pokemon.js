import { GET_POKEMON } from '../service/getPokemon'
import { actionTypes as asyncTypes, reducerHelpers } from 'use-async-ops-redux'
import { createSelector } from 'reselect'

export const GET_POKEMONS = 'GET_POKEMONS'

export const getPokemons = () => ({
  type: GET_POKEMONS
})

const initialError = {
  code: '',
  message: '',
  values: []
}

const initialState = {
  error: initialError,
  name: '',
  weight: 0,
  id: 0,
  order: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case asyncTypes.COMPLETE:
      if (reducerHelpers.isAsyncComplete(GET_POKEMON)(action)) return getPokemonResult(state, action)
      return state
    default: return state
  }
}

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

export const selectPokemon = createSelector(
  state => state.pokemon,
  pokemon => pokemon
)
