import { memo } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Home from './component'

const mapStateToProps = state => ({
  id: state.pokemon.id,
  weight: state.pokemon.weight,
  order: state.pokemon.order
})

const enhance = compose(
  connect(mapStateToProps, null),
  memo
)

export default enhance(Home)
