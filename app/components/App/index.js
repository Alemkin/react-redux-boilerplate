import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import App from './component'
import getPokemonService from '../../service/getPokemon'
import { selectPokemon } from '../../reducers/pokemon'

export const selectPokemonStatus = createSelector(
  state => getPokemonService.status(state),
  status => status
)

const AppContainer = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(selectPokemon)
  const pokemonStatus = useSelector(selectPokemonStatus) || {}

  useEffect(() => {
    dispatch(getPokemonService.action('magikarp'))
  }, [])

  return (
    <App error={pokemonStatus.error} loading={pokemonStatus.loading || false} name={pokemon.name} />
  )
}

export default AppContainer
