import * as R from 'ramda'
import * as RE from 'recompose'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { TextField } from 'material-ui'
import List, { ListItem, ListItemText } from 'material-ui/List'

import * as todoActions from '~/app/actions/todo'
import { bindActionCreators } from '~/app/utils'

const enterPressed = R.propEq('key', 'Enter')

const enhance = R.compose(
  connect(R.pick(['todos']), bindActionCreators(todoActions)),
  RE.setPropTypes({
    todos:   PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
  }),
  RE.withState('inputText', 'updateInputText', ''),
  RE.withHandlers({
    onKeyPress: ({ inputText, addTodo, updateInputText }) => e => {
      if (!enterPressed(e)) return
      addTodo(inputText)
      updateInputText('')
    },
    onChange: ({ inputText, updateInputText }) => e => {
      updateInputText(e.target.value)
    },
  })
)

const App = ({
  inputText, todos, onKeyPress, onChange,
}) => (
  <div>
    <TextField onChange={onChange} onKeyPress={onKeyPress} value={inputText} />
    <List>
      {R.map(
        todo => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ),
        todos
      )}
    </List>
  </div>
)

export default enhance(App)
