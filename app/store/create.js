import { createStore, compose } from 'redux'
import reducers from '../reducers'
import createMiddleware from './middleware'
import { getInitialState } from '../utils/fetch'

export default () => createStore(reducers, getInitialState(), compose(createMiddleware()))
