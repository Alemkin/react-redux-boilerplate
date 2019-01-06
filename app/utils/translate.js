import i18next from 'i18next'
import translations from '../translations'

export const translateComponent = componentName => {
  if (!componentName || componentName.length === 0) throw new Error('translateComponent requires valid `componentName` argument.')

  return (...langKeys) => {
    if (!langKeys || langKeys.length === 0) throw new Error('Expected one or more lang key arguments.')
    return translate(componentName, ...langKeys)
  }
}

let T = null

const setTranslator = translateFn => {
  T = translateFn
}

export const translate = (...langKeys) => {
  if (!langKeys || langKeys.length === 0) throw new Error('Expected one or more lang key arguments.')
  if (!T) throw new Error('Translate was not initialized')
  return T([...langKeys].join('.'), { defaultValue: '** MISSING LANG KEY **' })
}

export const initTranslator = () => {
  i18next.init({ lng: 'en', resources: translations })
  setTranslator(i18next.t.bind(i18next))
}
