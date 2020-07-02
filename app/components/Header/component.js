import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { logout } from '../../utils/fetch'
import { translateComponent } from '../../utils/translate'

import './index.scss'

const t = translateComponent('Header')

const Header = ({ user, toggle, isOpen }) => {
  const isLoggedIn = !!(user && user.id)
  return (
    <Row className='header'>
      <Col>
        <Navbar dark expand='md'>
          <NavbarBrand tag={Link} to='/'>{t('brand')}</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              {
                isLoggedIn &&
                  <>
                    <NavItem>
                      <NavLink tag={Link} to='/'>{t('dashboard')}</NavLink>
                    </NavItem>
                  </>
              }
            </Nav>
            <Nav className='ml-auto' navbar>
              {
                !isLoggedIn &&
                  <NavItem>
                    <NavLink tag={Link} to='/login'>{t('login')}</NavLink>
                  </NavItem>
              }
              {
                isLoggedIn &&
                  <>
                    <NavItem>
                      <NavLink tag={Button} color='dark' onClick={() => logout()}>Logout</NavLink>
                    </NavItem>
                  </>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Header
