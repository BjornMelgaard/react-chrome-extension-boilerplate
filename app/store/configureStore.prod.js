import { createStore, applyMiddleware } from 'redux'

import rootReducer from '~/app/reducers'

import logicMiddleware from './shared/logicMiddleware'
import dispatchStoreCreated from './shared/dispatchStoreCreated'

/**
 * Production Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logicMiddleware)
  )

  dispatchStoreCreated(store)

  return store
}
