import { get, authHeaders } from './shared'

export function getCurrentUser() {
  return get('/api/v2/users/current', authHeaders())
}
