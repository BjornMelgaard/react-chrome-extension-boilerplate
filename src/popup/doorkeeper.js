import { API_HOST, doorkeeperConf } from './config'
import chromep from './chromep'

const extRedirectUri = chrome.identity.getRedirectURL('provider_cb')

function getCode(respRedirectUri) {
  const respRedirectRe = new RegExp(extRedirectUri + '[#?](.*)')
}

export async function authorize() {
  console.log(
    'extRedirectUri',
    extRedirectUri,
    encodeURIComponent(extRedirectUri)
  )

  const url =
    `${API_HOST}/oauth/authorize` +
    '?response_type=code' +
    `&client_id=${doorkeeperConf.client_id}` +
    `&redirect_uri=${extRedirectUri}` +
    `&scope=${doorkeeperConf.api_scope}`

  console.log(url)

  const options = {
    interactive: true,
    url,
  }

  // redirectUri has form https://{app_id}.chromiumapp.org/provider_cb#code={value}
  const redirectUri = await chromep.identity.launchWebAuthFlow(options)

  console.log('launchWebAuthFlow completed', redirectUri)
}

export function clear() {}

export function getAccessToken() {}
