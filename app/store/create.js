import { createStore, compose } from 'redux'
import reducers from '../reducers'
import createMiddleware from './middleware'
import withReduxEnhancer from 'addon-redux/enhancer'

export default () => createStore(reducers, compose(createMiddleware(), withReduxEnhancer))
