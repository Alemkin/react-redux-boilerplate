import React from 'react'
import { useSelector } from 'react-redux'
import App from './component'
import getPokemonService from '../../service/getPokemon'
import { selectPokemon } from '../../reducers/pokemon'
import useService from '../../hooks/useService'

const AppContainer = () => {
  const pokemon = useSelector(selectPokemon)
  const [loading, error] = useService(getPokemonService, ['magikarp'])
  return (
    <App loading={loading} error={error} name={pokemon.name} />
  )
}

export default AppContainer
