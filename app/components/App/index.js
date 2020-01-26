import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import App from './component'
import { GET_POKEMON } from '../../service/getPokemon'
import { useAsyncOp } from 'use-async-ops'
import { selectPokemon } from '../../reducers/pokemon'

const AppContainer = () => {
  const { call, loading, error } = useAsyncOp(GET_POKEMON)
  const pokemon = useSelector(selectPokemon)

  useEffect(() => {
    call('magikarp')
  }, [])

  return (
    <App error={error} loading={loading} name={pokemon.name} />
  )
}

export default AppContainer
