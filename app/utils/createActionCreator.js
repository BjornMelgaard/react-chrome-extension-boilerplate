import * as R from 'ramda'

const createActionCreator = (type, payloadMapper = R.identity) => (...args) => ({
  type,
  payload: payloadMapper(...args),
})

export default createActionCreator
