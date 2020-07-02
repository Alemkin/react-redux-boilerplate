import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('Dashboard')

const Dashboard = ({ user }) => {
  return (
    <Row className='dashboard'>
      <Col>
        <div className='text-center'>{`${t('loggedInAs')} ${user.name}`}</div>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}

export default Dashboard
