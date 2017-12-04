import Root from '~/app/containers/Root'
import getSavedState from '~/chrome/shared/getSavedState'
import * as doorkeeper from '~/chrome/shared/doorkeeper'

import render from './render'

import './index.css'

async function initReact() {
  const initialState = await getSavedState()

  const createStore = require('~/app/store/configureStore').default
  const store = createStore(initialState)

  render(Root, store)

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('../../../app/containers/Root', () => {
      const NextRoot = require('~/app/containers/Root').default
      render(NextRoot, store)
    })
  }
}

async function run() {
  await doorkeeper.authorize()

  initReact()
}

run()
