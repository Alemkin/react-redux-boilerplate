import { sagaMiddleware } from '../store/middleware'
import { saga as asyncSaga } from 'async-operations'

import './checkPokemonFound'
sagaMiddleware.run(asyncSaga)
