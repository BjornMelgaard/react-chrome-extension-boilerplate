const expected = process.env.CHROME_EXTENSION_OAUTH_REDIRECT_URI

function checkRedirectUri(actual) {
  if (expected !== actual) {
    const message = [
      `Expected: ${expected}`,
      `Actual: ${actual}`,
      'Update CHROME_EXTENSION_OAUTH_REDIRECT_URI to actual in backend and in .env.xxx',
    ].join('\n')

    throw new Error(message)
  }
}

export default checkRedirectUri
