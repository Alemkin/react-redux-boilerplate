import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import { decodeErrorMessage } from './errorDecoder'
import { Alert } from 'reactstrap'
import './index.scss'

const StandardError = ({ code, message }) => {
  if (!code) return null
  return (
    <Alert className='m-0' color='danger'>
      <ErrorBox message={decodeErrorMessage(code, message)} />
    </Alert>
  )
}

const ErrorBox = ({ message }) => {
  if (!message) return null
  return <Markdown source={message} className='error-box-markdown' />
}

ErrorBox.propTypes = {
  message: PropTypes.string
}

StandardError.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string
}

export default StandardError
