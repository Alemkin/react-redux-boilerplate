import { takeEvery } from 'redux-saga/effects'
import { sagaMiddleware } from '../store/middleware'
import { GET_POKEMON } from '../service/getPokemon'
import { reducerHelpers } from 'use-async-ops-redux'

export default function * checkPokemonFound () {
  yield takeEvery(reducerHelpers.isAsyncComplete(GET_POKEMON), work)
}

export function * work (action) {
  const p = action.response || {}
  if (!p.name) {
    console.log('Alas... No Pokemon!')
  }
}

sagaMiddleware.run(checkPokemonFound)
