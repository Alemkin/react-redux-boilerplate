import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'
import Home from './component'
import { initTranslator } from '../../utils/translate'

initTranslator()

const story = storiesOf('Home', module)
story.addDecorator(withKnobs)

story.add('default', () => <Home
  weight={number('weight', 100)}
  id={number('id', 129)}
  order={number('order', 191)}
/>)
