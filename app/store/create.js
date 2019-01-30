import { createStore, compose } from 'redux'
import reducers from '../reducers'
import createMiddleware from './middleware'

export default () => createStore(reducers, compose(createMiddleware()))
