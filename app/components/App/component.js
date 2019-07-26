import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import LoadingIcon from '../LoadingIcon'
import { GET_POKEMON } from '../../service/getPokemon'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('App')

const NotFound = () => <Row><Col><h1>{t('notfound')}</h1></Col></Row>

const App = ({ name, asyncOperationStart, loading }) => {
  useEffect(() => {
    asyncOperationStart(GET_POKEMON, 'magikarp')
  }, [])

  if (loading) return <LoadingIcon />

  return (
    <div className='poke-main'>
      <Container fluid>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='' component={NotFound} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
