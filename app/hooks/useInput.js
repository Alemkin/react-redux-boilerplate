import { useState } from 'react'
import { isEmpty } from 'lodash'

export const useInput = (options) => {
  const [value, setValue] = useState(options.initialValue)
  const [valid, setValid] = useState(null)
  const [invalid, setInvalid] = useState(null)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        const val = event.target.value
        setValue(val)
        if (options.validate) {
          if (!options.validate(val)) {
            setValid(null)
            setInvalid(true)
          } else {
            setValid(true)
            setInvalid(null)
          }
        } else if (options.required) {
          if (isEmpty(val)) {
            setValid(null)
            setInvalid(true)
          } else {
            setValid(true)
            setInvalid(null)
          }
        }
      },
      valid,
      invalid,
      required: options.required,
      meta: {
        validate: () => {
          let isValid = false
          if (options.validate) {
            isValid = options.validate(value)
            if (!isValid) {
              setValid(null)
              setInvalid(true)
            } else {
              setValid(true)
              setInvalid(null)
            }
          } else if (options.required) {
            if (isEmpty(value)) {
              setValid(null)
              setInvalid(true)
            } else {
              isValid = true
              setValid(true)
              setInvalid(null)
            }
          }
          return isValid
        }
      }
    }
  }
}

export default useInput
