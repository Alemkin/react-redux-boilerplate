import React from 'react'
import { shallow } from 'enzyme'
import Home from './component'
import { cleanup } from 'react-testing-library'
import '../../../test.config'

afterEach(cleanup)

describe('Home component', () => {
  it('renders', () => {
    const wrapper = shallow(<Home id={129} weight={100} order={191} />)

    expect(wrapper.exists()).toBe(true)
  })
})
