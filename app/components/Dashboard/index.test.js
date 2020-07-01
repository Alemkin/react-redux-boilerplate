import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from './component'
import { cleanup } from 'react-testing-library'
import { Switch, Route } from 'react-router-dom'
import '../../../test.config'

afterEach(cleanup)

describe('Dashboard component', () => {
  it('renders', () => {
    const wrapper = shallow(<Dashboard user={{ name: 'Alexander Lemkin' }} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('top level div with classname dashboard', () => {
    const wrapper = shallow(<Dashboard user={{ name: 'Alexander Lemkin' }} />)

    expect(wrapper.find('.dashboard')).toHaveLength(1)
  })
})
