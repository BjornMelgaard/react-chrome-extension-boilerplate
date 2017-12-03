import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from '~/app/reducers'

import logicMiddleware from './shared/logicMiddleware'
import dispatchStoreCreated from './shared/dispatchStoreCreated'

/**
 * Development Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, logicMiddleware)
  )

  dispatchStoreCreated(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
