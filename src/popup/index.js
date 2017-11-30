import * as config from './config'
import { showCurrentUser, setupForm, setupLogoutBtn } from './view'

var doorkeeper = new OAuth2('doorkeeper', config.doorkeeper)

// main
doorkeeper.authorize(function() {
  showCurrentUser()
  setupForm()
  setupLogoutBtn()
})
