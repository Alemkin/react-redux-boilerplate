import React from 'react'
import { shallow } from 'enzyme'
import App from './component'
import { cleanup } from 'react-testing-library'
import { Switch, Route } from 'react-router-dom'
import '../../../test.config'

afterEach(cleanup)

describe('App component', () => {
  it('renders', () => {
    const wrapper = shallow(<App name='test' loading={false} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('wraps the app in a div', () => {
    const wrapper = shallow(<App name='test' loading={false} />)

    expect(wrapper.find('.poke-main')).toHaveLength(1)
  })

  it('contains a switch', () => {
    const wrapper = shallow(<App name='test' loading={false} />)

    expect(wrapper.find(Switch)).toHaveLength(1)
  })

  it('has 2 routes', () => {
    const wrapper = shallow(<App name='test' loading={false} />)

    expect(wrapper.find(Route)).toHaveLength(3)
  })
})
