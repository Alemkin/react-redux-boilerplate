import getPokemonService from '../service/getPokemon'
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
    case getPokemonService.COMPLETE: return getPokemonResult(state, action)
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
