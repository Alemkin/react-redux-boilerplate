import { combineReducers } from 'redux'
import pokemon from './pokemon'
import { reducer as asyncops } from 'async-operations'

const rootReducer = combineReducers({
  pokemon,
  asyncops
})

export default rootReducer
