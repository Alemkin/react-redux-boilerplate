import { combineReducers } from 'redux'
import auth from './auth'
import { reducer as asyncops } from 'async-operations'

const rootReducer = combineReducers({
  auth,
  asyncops
})

export default rootReducer
