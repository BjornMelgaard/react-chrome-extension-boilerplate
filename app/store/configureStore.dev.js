import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from '../reducers'
import storage from '../utils/storage'

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port:     process.env.REMOTE_REDUX_DEVTOOLS_PORT,
})

const enhancer = composeEnhancers(applyMiddleware(thunk), storage())

export default function(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../reducers')

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
