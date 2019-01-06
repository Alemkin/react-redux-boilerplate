import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { initTranslator } from './app/utils/translate'

initTranslator()

Enzyme.configure({ adapter: new Adapter() })
