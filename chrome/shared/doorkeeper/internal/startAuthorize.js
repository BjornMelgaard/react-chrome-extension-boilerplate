import axios from 'axios'
import chromep from '~/chrome/shared/chromep'

import getSearchParam from '../lib/getSearchParam'
import dataToStorageData from '../lib/dataToStorageData'

async function exchangeCodeForToken(code, getAccessTokenUrl) {
  const url = getAccessTokenUrl(code)
  return axios.post(url)
}

// uri has form https://{app_id}.chromiumapp.org/provider_cb#code={value}
const getCode = getSearchParam('code')

async function startAuthorize(storage, getAuthorizeUrl, getAccessTokenUrl) {
  const options = {
    interactive: true,
    url:         getAuthorizeUrl(),
  }

  const respRedirectUri = await chromep.identity.launchWebAuthFlow(options)
  const code = getCode(respRedirectUri)
  const resp = await exchangeCodeForToken(code, getAccessTokenUrl)
  const data = dataToStorageData(resp.data)
  storage.saveAll(data)
}

export default startAuthorize
