import { post, authHeaders } from './shared'

export function createPage({ url }) {
  const params = {
    url: url,
  }
  return post('/api/v2/stories/add_page', params, authHeaders())
}
