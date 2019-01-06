import React from 'react'
import { reduxForm } from 'redux-form'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import addons from '@storybook/addons'
import withReduxCore from 'addon-redux/withRedux'
import store from '../app/store'
import '../app/sagas'

export const withReduxForm = formName => story => React.createElement(reduxForm({form: formName})(story))

export const withRouter = story => <BrowserRouter>{story()}</BrowserRouter>

export const withRedux = (state, actions) => withReduxCore(addons)({
  store, state, actions
})
