import React from 'react'
import { shallow } from 'enzyme'
import App from './component'
import { cleanup } from 'react-testing-library'
import { Switch, Route } from 'react-router-dom'
import '../../../test.config'

afterEach(cleanup)

describe('App component', () => {
  it('renders', () => {
    const wrapper = shallow(<App user={{ id: 1 }} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('wraps the app in a div', () => {
    const wrapper = shallow(<App user={{ id: 1 }} />)

    expect(wrapper.find('.boilerplate-main')).toHaveLength(1)
  })

  it('contains a switch', () => {
    const wrapper = shallow(<App user={{ id: 1 }} />)

    expect(wrapper.find(Switch)).toHaveLength(1)
  })

  it('has 3 routes while logged in', () => {
    const wrapper = shallow(<App user={{ id: 1 }} />)

    expect(wrapper.find(Route)).toHaveLength(3)
  })
})
