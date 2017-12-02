import * as RE from 'recompose'
import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'

const enhance = RE.setPropTypes({
  store: PropTypes.object.isRequired,
})

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default enhance(Root)
