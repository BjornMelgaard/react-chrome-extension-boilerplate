import { getCurrentUser } from '../api'

// const setUserAvatar = avatar => $('.user-page-info>img')

function showUserAvatar({ url, thumb, medium }) {
  if (!url) {
  }
}

export async function showCurrentUser() {
  const currentUser = await getCurrentUser()
  console.log(currentUser)
  $('#current-user').text(currentUser.username)
}
