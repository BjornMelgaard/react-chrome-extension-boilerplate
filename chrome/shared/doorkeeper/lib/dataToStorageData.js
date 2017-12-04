import renameKeysOnly from './renameKeysOnly'

const dataToStorageData = renameKeysOnly({
  access_token:  'accessToken',
  refresh_token: 'refreshToken',
  created_at:    'createdAt',
  expires_in:    'expiresIn',
})

export default dataToStorageData
