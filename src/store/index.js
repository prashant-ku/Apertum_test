import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { enableMapSet } from 'immer'
import { hydrate, persist } from './persistence'
import reducer from './reducer'
import saga from './saga'

enableMapSet()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(reducer, hydrate(), enhancer)
sagaMiddleware.run(saga)
store.subscribe(() => {
  persist(store.getState())
})

export { saga, reducer }

export default store
