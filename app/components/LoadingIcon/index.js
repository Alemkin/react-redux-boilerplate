import React from 'react'

import { translateComponent } from '../../utils/translate'
const t = translateComponent('LoadingIcon')

// TODO make this less ugly
const LoadingIcon = () => <div>{t('loading')}</div>

export default LoadingIcon
