import React from 'react'
import { useSelector } from 'react-redux'
import Header from './component'
import { selectPokemon } from '../../reducers/pokemon'

const HeaderContainer = () => {
  const pokemon = useSelector(selectPokemon)

  return (
    <Header name={pokemon.name} />
  )
}

export default HeaderContainer
