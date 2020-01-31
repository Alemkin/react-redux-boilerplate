import { takeEvery } from 'redux-saga/effects'
import { sagaMiddleware } from '../store/middleware'
import getPokemonService from '../service/getPokemon'

export default function * checkPokemonFound () {
  yield takeEvery(getPokemonService.COMPLETE, work)
}

export function * work (action) {
  const p = action.response || {}
  if (!p.name) {
    console.log('Alas... No Pokemon!')
  }
}

sagaMiddleware.run(checkPokemonFound)
