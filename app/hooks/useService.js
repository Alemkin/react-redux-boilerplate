
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const selectStatus = service => state => {
  return {
    loading: false,
    error: null,
    ...(service.status(state) || {})
  }
}

/*
Service required, args optional
args will be passed into the service invocation
args used as dependencies for useEffect
*/
export default (service, args = []) => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus(service)) || {}
  useEffect(() => {
    dispatch(service.action(...args))
  }, args)

  return [status.loading, status.error]
}
