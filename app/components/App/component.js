import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import LoadingIcon from '../LoadingIcon'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('App')

const NotFound = () => <Row><Col><h1>{t('notfound')}</h1></Col></Row>

const App = ({ name, loading, error }) => {
  const location = useLocation()
  if (loading) return <LoadingIcon />

  return (
    <div className='poke-main'>
      <Container fluid>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} key={location.pathname} />
          <Route path='' component={NotFound} key={location.pathname} />
        </Switch>
      </Container>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default App
