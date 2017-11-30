import { storyData } from './shared'
import { createPage, createStory } from '../api'

export function addSubmitHandler() {
  // disable submit
  $('#story-form').submit(function(event) {
    event.preventDefault()
  })

  // instead use submitHandler
  $('#story-form').validate({
    submitHandler: async function(form) {
      const data = storyData()

      console.log(data)

      const pageResp = await createPage({
        url: data.link,
      })

      console.log('pageResp', pageResp)
      const pageId = pageResp.id

      const storyResp = await createStory({
        pageId: pageId,
        text:   data.highlight,
        rank:   data.rank,
      })

      console.log('storyResp', storyResp)

      $('#success-message').show('slow')
    },
  })
}
