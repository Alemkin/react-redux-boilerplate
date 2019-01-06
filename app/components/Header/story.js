import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Header from './component'

const story = storiesOf('Header', module)
story.addDecorator(withKnobs)

story.add('default', () => <Header
  name={text('name', 'magikarp')}
/>)
