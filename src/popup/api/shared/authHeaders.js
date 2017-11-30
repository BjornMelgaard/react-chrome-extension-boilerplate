import doorkeeper from '../../doorkeeper'

export function authHeaders() {
  const accessToken = doorkeeper.getAccessToken()
  return {
    Authorization: `Bearer ${accessToken}`,
  }
}
