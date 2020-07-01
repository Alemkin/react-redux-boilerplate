import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './component'
import { selectAuth } from '../../reducers/auth'

const DashboardContainer = () => {
  const auth = useSelector(selectAuth)

  return (
    <Dashboard user={auth.user} />
  )
}

export default DashboardContainer
