import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './component'
import { selectAuth } from '../../reducers/auth'

const HeaderContainer = () => {
  const auth = useSelector(selectAuth)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Header user={auth.user} toggle={toggle} isOpen={isOpen} />
  )
}

export default HeaderContainer
