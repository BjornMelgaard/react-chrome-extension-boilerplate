import {
  showCurrentUrl,
  showCurrentUser,
  addSubmitHandler,
  setupLogoutBtn,
} from './controllers'
import doorkeeper from './doorkeeper'

// TODO: use chrome.identity api instead of oauth2 lib
doorkeeper.authorize(function() {
  showCurrentUrl()
  showCurrentUser()
  addSubmitHandler()
  setupLogoutBtn()
})
