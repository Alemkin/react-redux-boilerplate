import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { actions as asyncActions } from 'async-ops'
import { withRouter } from 'react-router'
import App from './component'

const mapStateToProps = state => ({
  loading: state.pokemon.loading,
  name: state.pokemon.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
  asyncOperationStart: asyncActions.asyncOperationStart
}, dispatch)

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(App)
