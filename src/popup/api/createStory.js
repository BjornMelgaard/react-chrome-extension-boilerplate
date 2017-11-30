import { post, authHeaders } from './shared'

export function createStory({ pageId, text, rank }) {
  var params = {
    page_id: pageId,
    text: text,
    rank: rank,
  }
  return post('/api/v2/stories', params, authHeaders())
}
