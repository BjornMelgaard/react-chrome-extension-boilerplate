import { API_HOST } from '../config'
import * as doorkeeper from '../doorkeeper'

export function setupLogoutBtn() {
  $('#logout').click(function(e) {
    e.preventDefault()
    doorkeeper.clear()
    chrome.tabs.create({ url: API_HOST + '/session/end' })
  })
}
