import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import StandardError from '../StandardError'
import useInput from '../../hooks/useInput'
import { validateEmail } from '../../utils/validators'
import { translateComponent } from '../../utils/translate'

const t = translateComponent('Login')

const cols = { xs: 12, md: { size: 6, offset: 3 }, lg: { size: 4, offset: 4 } }
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
            <Label for='email'>{t('email')}</Label>
            <Input type='email' name='email' id='email' placeholder={t('emailPlaceholder')} {...bindEmail} />
            <FormFeedback>{t('invalidEmail')}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for='password'>{t('password')}</Label>
            <Input type='password' name='password' id='password' placeholder={t('emailPlaceholder')} {...bindPassword} />
            <FormFeedback>{t('invalidPassword')}</FormFeedback>
          </FormGroup>
          <Button disabled={loading} color='info'>{!loading ? t('login') : t('loggingIn')}</Button>
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
