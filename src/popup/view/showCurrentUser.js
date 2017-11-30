import { getCurrentUser } from '../api'

export function showCurrentUser() {
  getCurrentUser().done(function(resp) {
    $('#current-user').text(resp.username)
  })
}
