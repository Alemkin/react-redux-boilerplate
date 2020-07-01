import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import StandardError from '../StandardError'
import useInput from '../../hooks/useInput'
import { validateEmail } from '../../utils/validators'

const cols = { xs: 12, md: { size: 6, offset: 3 } }
const Login = ({ login, loading, error }) => {
  const { bind: bindEmail } = useInput({ initialValue: '', required: true, validate: validateEmail })
  const { bind: bindPassword } = useInput({ initialValue: '', required: true })
  return (
    <Row className='login'>
      <Col className='mb-4' xs={12}>
        <StandardError code={error.code} message={error.message} />
      </Col>
      <Col {...cols}>
        <Form onSubmit={login({ bindEmail, bindPassword })} noValidate>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' name='email' id='email' placeholder='Enter your Email Address' {...bindEmail} />
            <FormFeedback>Please enter a valid email address</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input type='password' name='password' id='password' placeholder='Enter Your Password' {...bindPassword} />
            <FormFeedback>Please enter a password</FormFeedback>
          </FormGroup>
          <Button disabled={loading} color='info'>{!loading ? 'Log in' : 'Logging In ...'}</Button>
        </Form>
      </Col>
    </Row>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
}

export default Login
