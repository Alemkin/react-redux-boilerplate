import React from 'react'
import { shallow } from 'enzyme'
import Header from './component'
import { cleanup } from 'react-testing-library'
import '../../../test.config'

afterEach(cleanup)

describe('Header component', () => {
  it('renders', () => {
    const wrapper = shallow(<Header name='magikarp' />)

    expect(wrapper.exists()).toBe(true)
  })
})
