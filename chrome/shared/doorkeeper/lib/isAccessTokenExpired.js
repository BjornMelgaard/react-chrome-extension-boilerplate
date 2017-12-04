import { assertType } from 'ramda-asserters'

function timeNowUTC() {
  return Math.floor(new Date().getTime() / 1000)
}

// XXX: stolen from
// https://github.com/doorkeeper-gem/doorkeeper/blob/b91c898ead0b21c4d5041f23b3d8583da6e0350d/lib/doorkeeper/models/concerns/expirable.rb#L9
function isAccessTokenExpired({ createdAt, expiresIn }) {
  assertType('Number', createdAt)
  assertType('Number', expiresIn)

  const expiresAtTime = createdAt + expiresIn
  const currentTime = timeNowUTC()
  return currentTime > expiresAtTime
}

export default isAccessTokenExpired
