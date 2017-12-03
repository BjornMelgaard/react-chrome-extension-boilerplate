import * as R from 'ramda'
import { createReducer } from '~/app/utils'
import * as c from '~/app/constants/todos'

const initialState = [
  {
    text:      'Use Redux',
    completed: false,
    id:        0,
  },
]

const maxElem = R.reduce(R.max, -1)
const ids = R.map(R.prop('id'))
const findMaxId = R.pipe(ids, maxElem)

const actionsMap = {
  [c.ADD_TODO]: (state, text) =>
    R.prepend(
      {
        id:        findMaxId(state) + 1,
        completed: false,
        text,
      },
      state
    ),
}

export default createReducer(actionsMap, initialState)
