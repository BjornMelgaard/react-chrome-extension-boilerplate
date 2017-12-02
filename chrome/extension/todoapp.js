import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from '../../app/containers/Root'
import './todoapp.css'

const render = (Component, store) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

chrome.storage.local.get('state', obj => {
  const { state } = obj
  const initialState = JSON.parse(state || '{}')

  const createStore = require('../../app/store/configureStore').default
  const store = createStore(initialState)

  render(Root, store)

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('../../app/containers/Root', () => {
      const NextRoot = require('../../app/containers/Root').default
      render(NextRoot, store)
    })
  }
})
