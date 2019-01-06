import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pokemon from './pokemon'

const rootReducer = combineReducers({
  pokemon,
  form: formReducer
})

export default rootReducer
