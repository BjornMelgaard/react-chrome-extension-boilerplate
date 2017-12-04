// import * as R from 'ramda'
// import { assert } from 'ramda-asserters'

import ScopedStorage from '../ScopedStorage'
import isAccessTokenExpired from './lib/isAccessTokenExpired'
import startAuthorize from './internal/startAuthorize'
import startRefreshToken from './internal/startRefreshToken'

import {
  getAuthorizeUrl,
  getAccessTokenUrl,
  getRefreshTokenUrl,
} from './config'

export const storage = new ScopedStorage('doorkeeper')

// const assertTrue = assert(x => x === true)

// const ifDevRun = cb => {
//   if (process.env.NODE_ENV === 'development') {
//     cb()
//   }
// }

export async function authorize() {
  // storage.removeAll()
  // storage.save('expiresAt', 0)

  // ifDevRun(() => assertTrue(!isAccessTokenExpired(storage.getAll())))

  if (!storage.get('refreshToken')) {
    await startAuthorize(storage, getAuthorizeUrl, getAccessTokenUrl)

    // ifDevRun(() => assertTrue(!isAccessTokenExpired(storage.getAll())))
  }

  const expired = isAccessTokenExpired(storage.getAll())

  if (expired) {
    await startRefreshToken(storage, getRefreshTokenUrl)

    // ifDevRun(() => assertTrue(!isAccessTokenExpired(storage.getAll())))
  }
}
