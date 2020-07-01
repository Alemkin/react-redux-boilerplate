import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

const Dashboard = ({ user }) => {
  return (
    <Row className='dashboard'>
      <Col>
        <div className='text-center'>{`You are logged in as ${user.name}`}</div>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}

export default Dashboard
