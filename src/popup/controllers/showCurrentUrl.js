function getCurrentUrl() {
  return new Promise((resolve, reject) => {
    chrome.tabs.getSelected(null, function(tab) {
      resolve(tab.url)
    })
  })
}

export async function showCurrentUrl() {
  const currentUrl = await getCurrentUrl()

  $('#story-link').val(currentUrl)
}
