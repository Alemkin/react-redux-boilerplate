import { isEmpty } from 'lodash'

export const validateEmail = val => !isEmpty(val) && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val))
