import { showCurrentUser, setupForm, setupLogoutBtn } from './view'
import doorkeeper from './doorkeeper'

// TODO: use chrome.identity api instead of oauth2 lib
doorkeeper.authorize(function() {
  showCurrentUser()
  setupForm()
  setupLogoutBtn()
})
