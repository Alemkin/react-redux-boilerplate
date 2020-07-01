export const ERROR_CODES = {
  401: message =>
    `#### Not Authorized
    \n ${message}`,

  403: message =>
    `#### Permission Denied
    \n ${message}`,

  500: message =>
    `#### An Error Has Occurred
    \n ${message}`
}

export const decodeErrorMessage = (code, message) => {
  const standardMessage = message || ''
  if (!code) return ERROR_CODES.ERROR(standardMessage)
  if (!ERROR_CODES[code]) return ERROR_CODES[500](standardMessage)
  return ERROR_CODES[code](standardMessage)
}
