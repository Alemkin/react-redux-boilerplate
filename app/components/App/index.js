import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './component'
import { GET_POKEMON } from '../../service/getPokemon'
import { actions as asyncActions } from 'async-ops'
import { selectPokemon } from '../../reducers/pokemon'

const AppContainer = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(selectPokemon)

  useEffect(() => {
    dispatch(asyncActions.asyncOperationStart(GET_POKEMON, 'magikarp'))
  }, [])

  return (
    <App loading={pokemon.loading} name={pokemon.name} />
  )
}

export default AppContainer
