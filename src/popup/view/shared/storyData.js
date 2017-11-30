export function storyLink() {
  return $('#story-link').val()
}

export function storyRank() {
  return $('#story-rank').val()
}

export function storyHightlight() {
  return $('#story-highlight').val()
}

export function storyData() {
  return {
    link: storyLink(),
    rank: storyRank(),
    highlight: storyHightlight(),
  }
}
