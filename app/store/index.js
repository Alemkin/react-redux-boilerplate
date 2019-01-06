import createStore from './create'
const store = createStore()
if (process.env.NODE_ENV !== 'production') window.store = store
export default store
