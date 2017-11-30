export function authHeaders() {
  var accessToken = doorkeeper.getAccessToken()
  return {
    Authorization: `Bearer ${accessToken}`,
  }
}
