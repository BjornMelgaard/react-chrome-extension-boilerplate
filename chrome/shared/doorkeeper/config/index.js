import checkRedirectUri from './checkRedirectUri'

const e = process.env

// XXX: must be same as CHROME_EXTENSION_OAUTH_REDIRECT_URI on server
const extRedirectUri = chrome.identity.getRedirectURL('provider_cb')

checkRedirectUri(extRedirectUri)

export const getAuthorizeUrl = () =>
  `${e.API_HOST}/oauth/authorize` +
  '?response_type=code' +
  `&client_id=${e.CHROME_EXTENSION_OAUTH_UID}` +
  `&redirect_uri=${extRedirectUri}` +
  '&scope=user_all'

export const getAccessTokenUrl = code =>
  `${e.API_HOST}/oauth/token` +
  `?client_id=${e.CHROME_EXTENSION_OAUTH_UID}` +
  `&client_secret=${e.CHROME_EXTENSION_OAUTH_SECRET}` +
  `&redirect_uri=${extRedirectUri}` +
  `&code=${code}` +
  '&grant_type=authorization_code'

export const getRefreshTokenUrl = refreshToken =>
  `${e.API_HOST}/oauth/token` +
  `?client_id=${e.CHROME_EXTENSION_OAUTH_UID}` +
  `&client_secret=${e.CHROME_EXTENSION_OAUTH_SECRET}` +
  `&refresh_token=${refreshToken}` +
  '&grant_type=refresh_token'
