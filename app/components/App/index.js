import { compose, lifecycle, branch, renderComponent } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GET_POKEMON } from '../../service/getPokemon'
import { actions as asyncActions } from 'async-ops'
import { withRouter } from 'react-router'
import LoadingIcon from '../LoadingIcon'
import App from './component'

const mapStateToProps = state => ({
  loading: state.pokemon.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  asyncOperationStart: asyncActions.asyncOperationStart
}, dispatch)

const lifecycleMethods = {
  componentWillMount () {
    this.props.asyncOperationStart(GET_POKEMON, 'magikarp')
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods),
  branch(props => props.loading, renderComponent(LoadingIcon))
)

export default enhance(App)
