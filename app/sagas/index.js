import { sagaMiddleware } from '../store/middleware'
import { saga as asyncSaga } from 'async-ops'

import './checkPokemonFound'
sagaMiddleware.run(asyncSaga)
