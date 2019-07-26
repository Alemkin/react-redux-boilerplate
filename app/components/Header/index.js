import { memo } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from './component'

const mapStateToProps = state => ({
  name: state.pokemon.name
})

const enhance = compose(
  connect(mapStateToProps, null),
  memo
)

export default enhance(Header)
