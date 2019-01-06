import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('App')

const NotFound = () => <Row><Col><h1>{t('notfound')}</h1></Col></Row>

const App = () =>
  <div className='poke-main'>
    <Container fluid>
      <Route path='/' component={Header} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='' component={NotFound} />
      </Switch>
    </Container>
  </div>

export default App
