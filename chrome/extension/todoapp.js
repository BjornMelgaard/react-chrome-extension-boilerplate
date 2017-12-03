import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from '~/app/containers/Root'
import chromep from '~/chrome/shared/chromep'

import './todoapp.css'

const render = (Component, store) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

/**
 * @returns {object}
 */
async function getSavedState() {
  const state = await chromep.storage.local.get('state')
  return state
}

async function init() {
  const initialState = await getSavedState()

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
}

init()
