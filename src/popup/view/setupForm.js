export function setupForm() {
  // disable submit
  $('#story-form').submit(function(event) {
    event.preventDefault()
  })

  // instead use submitHandler
  $('#story-form').validate({
    submitHandler: function(form) {
      var data = storyData()
      console.log(data)
      createPage({
        url: data.link,
      }).done(function(pageResp) {
        console.log('pageResp', pageResp)

        var pageId = pageResp.id

        createStory({
          pageId: pageId,
          text: data.highlight,
          rank: data.rank,
        }).done(function(storyResp) {
          console.log('storyResp', storyResp)
          $('#success-message').show('slow')
        })
      })
    },
  })
}
