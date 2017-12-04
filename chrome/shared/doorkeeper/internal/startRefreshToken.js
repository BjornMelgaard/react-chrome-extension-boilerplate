import axios from 'axios'

import dataToStorageData from '../lib/dataToStorageData'

async function exchangeRefreshTokenForToken(refreshToken, getRefreshTokenUrl) {
  const url = getRefreshTokenUrl(refreshToken)
  return axios.post(url)
}

async function startRefreshToken(storage, getRefreshTokenUrl) {
  const refreshToken = storage.get('refreshToken')
  const resp = await exchangeRefreshTokenForToken(
    refreshToken,
    getRefreshTokenUrl
  )
  console.log(resp)
  const data = dataToStorageData(resp.data)
  console.log(data)
  storage.saveAll(data)
}

export default startRefreshToken
