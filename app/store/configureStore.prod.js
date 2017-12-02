import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

/**
 * Production Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware())

  return store
}
