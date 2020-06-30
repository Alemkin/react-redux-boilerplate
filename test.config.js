/* eslint-disable no-undef */
import '@babel/polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { initTranslator } from './app/utils/translate'

initTranslator()

Enzyme.configure({ adapter: new Adapter() })

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path'
  })
}))
