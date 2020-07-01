import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Login from '../Login'
import './index.scss'

const App = ({ user }) => {
  const location = useLocation()
  const isLoggedIn = user && user.id

  return (
    <div className='boilerplate-main'>
      <Container fluid>
        <Route path='/' component={Header} />
        <Switch>
          {isLoggedIn && <Route exact path='/' component={Dashboard} key={location.pathname} />}
          <Route exact path='/login' component={Login} key={location.pathname} />
        </Switch>
      </Container>
    </div>
  )
}

App.propTypes = {
  user: PropTypes.object.isRequired
}

export default App
