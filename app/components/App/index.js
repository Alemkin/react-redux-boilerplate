import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuth } from '../../reducers/auth'
import refreshTokensService from '../../service/refreshTokens'
import useService from '../../hooks/useService'
import App from './component'

const AppContainer = () => {
  const auth = useSelector(selectAuth)
  const [loadingRefresh, refreshError] = useService(refreshTokensService)
  return (
    <App user={auth.user} loadingRefresh={loadingRefresh} error={refreshError} />
  )
}

export default AppContainer
