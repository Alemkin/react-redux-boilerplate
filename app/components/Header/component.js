import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import './index.scss'

const Header = ({ name }) =>
  <Row className='header'>
    <Col>
      <h2>{name}</h2>
    </Col>
  </Row>

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header
