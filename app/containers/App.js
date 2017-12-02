import * as R from 'ramda'
import * as RE from 'recompose'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as todoActions from '~/app/actions/todo'
import { bindActionCreators } from '~/app/utils'

const enhance = R.compose(
  RE.setPropTypes({
    todos:   PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
  }),
  connect(R.pick(['todos']), bindActionCreators(todoActions))
)

const text = R.map(R.prop('text'))

const App = ({ todos, addTodo }) => <div>{text(todos)}</div>

export default enhance(App)
