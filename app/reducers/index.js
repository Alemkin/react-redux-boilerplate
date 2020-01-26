import { combineReducers } from 'redux'
import { reducer as async } from 'async-ops'
import pokemon from './pokemon'

const rootReducer = combineReducers({
  pokemon,
  async
})

export default rootReducer
