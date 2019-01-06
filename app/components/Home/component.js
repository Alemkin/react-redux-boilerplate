import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import { translateComponent } from '../../utils/translate'
import './index.scss'

const t = translateComponent('Home')

const Home = ({ weight, id, order }) =>
  <Row className='home'>
    <Col>
      <h1>{t('welcome')}</h1>
      <h6>{`${t('id')}: ${id}, ${t('weight')}: ${weight}, ${t('order')}: ${order}`}</h6>
    </Col>
  </Row>

Home.propTypes = {
  weight: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired
}

export default Home
