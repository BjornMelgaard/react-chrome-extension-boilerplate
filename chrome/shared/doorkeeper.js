import chromep from './chromep'

const scope = 'user_all'
const redirectUri = chrome.identity.getRedirectURL('provider_cb')

// function getCode(respRedirectUri) {
//   const respRedirectRe = new RegExp(`${redirectUri}[#?](.*)`)
// }

export async function authorize() {
  console.log('redirectUri', redirectUri)

  const url =
    `${CHROME_EXTENSION_OAUTH_REDIRECT_URI}/oauth/authorize` +
    '?response_type=code' +
    `&client_id=${CHROME_EXTENSION_OAUTH_UID}` +
    `&redirect_uri=${redirectUri}` +
    `&scope=${scope}`

  console.log(url)

  const options = {
    interactive: true,
    url,
  }

  // redirectUri has form https://{app_id}.chromiumapp.org/provider_cb#code={value}
  const respRedirectUri = await chromep.identity.launchWebAuthFlow(options)

  console.log('launchWebAuthFlow completed', respRedirectUri)
}

export function clear() {}

export function getAccessToken() {}
