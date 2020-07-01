import { sagaMiddleware } from '../store/middleware'
import { saga as asyncSaga } from 'async-operations'

sagaMiddleware.run(asyncSaga)
