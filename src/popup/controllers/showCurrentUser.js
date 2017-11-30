import { getCurrentUser } from '../api'

export async function showCurrentUser() {
  const currentUser = await getCurrentUser()
  $('#current-user').text(currentUser.username)
}
