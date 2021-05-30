import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'

import store from './store'
import './service'
import './sagas'

import '../favicon.ico'

// Uncomment this if you want to enable this app as a Progressive Web App
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

// Uncomment this if you want to enable this app as a Progressive Web App
// registerServiceWorker()
