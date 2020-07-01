import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, getAuth } from '../../utils/fetch'
import loginService from '../../service/login'
import { selectAuth } from '../../reducers/auth'
import Login from './component'

const LoginContainer = () => {
  const dispatch = useDispatch()
  const auth = useSelector(selectAuth)
  useEffect(() => {
    if (getAuth()) {
      logout()
    }
  }, [])

  const login = (formValues) => ev => {
    ev.preventDefault()
    const isValid = formValues.bindEmail.meta.validate() && formValues.bindPassword.meta.validate()
    if (!isValid) return
    dispatch(loginService.action(formValues.bindEmail.value, formValues.bindPassword.value))
  }

  return (
    <Login login={login} loading={auth.loadingLogin} error={auth.error} />
  )
}

export default LoginContainer
