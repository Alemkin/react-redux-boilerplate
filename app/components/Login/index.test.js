import React from 'react'
import { shallow } from 'enzyme'
import Login from './component'
import { cleanup } from 'react-testing-library'
import '../../../test.config'

afterEach(cleanup)

describe('Login component', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Login
        error={{ code: 0, message: '' }}
        login={() => true}
        loading={false}
      />
    )

    expect(wrapper.exists()).toBe(true)
  })
})
