import * as R from 'ramda'
import { createLogic } from 'redux-logic'
import { ADD_TODO } from '~/app/constants/todos'
import { STORE_CREATED } from '~/app/constants/app'

function setBadge(count) {
  const text = count > 0 ? count.toString() : ''
  chrome.browserAction.setBadgeText({ text })
}

const updateBadgeLogic = createLogic({
  type: [ADD_TODO, STORE_CREATED],

  process({ getState }, dispatch, done) {
    const state = getState()
    const count = R.length(state.todos)
    setBadge(count)
    done()
  },
})

export default updateBadgeLogic
