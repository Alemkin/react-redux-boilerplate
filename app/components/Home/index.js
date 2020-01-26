import React from 'react'
import { useSelector } from 'react-redux'
import Home from './component'
import { selectPokemon } from '../../reducers/pokemon'

const HomeContainer = () => {
  const pokemon = useSelector(selectPokemon)

  return (
    <Home weight={pokemon.weight} id={pokemon.id} order={pokemon.order} />
  )
}

export default HomeContainer
