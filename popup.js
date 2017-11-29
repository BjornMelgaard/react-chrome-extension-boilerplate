// config
var API_HOST = "http://localhost:3000";
var API_URL = API_HOST + "/api/v2";

var doorkeeper = new OAuth2('doorkeeper', {
  client_id:     'b95a7ef0882822534c22791a11aef85fc0d3ac3b1cac1b557f672763e8b3fb1d',
  client_secret: 'e697ca7a4f0f75f2b909082f93de5b954f9f36d35b9cfb0995a598e1bcc6fdb6',
  api_scope:     'user_all'
});

// helpers

//
function authHeaders() {
  var accessToken = doorkeeper.getAccessToken()
  return {
    Authorization: `Bearer ${accessToken}`
  }
}

//
function storyLink() {
  return $('#story-link').val()
}

function storyRank() {
  return $('#story-rank').val()
}

function storyHightlight() {
  return $('#story-highlight').val()
}

function storyData() {
  return {
    link:      storyLink(),
    rank:      storyRank(),
    highlight: storyHightlight(),
  }
}

//
function post(url, params, headers) {
  return $.ajax({
    method: "POST",
    url: API_HOST + url,
    data: params,
    dataType: 'json',
    headers: headers,
  })
}

//
function get(url, headers) {
  return $.ajax({
    method: "GET",
    url: API_HOST + url,
    headers: headers,
  })
}

function getCurrentUser() {
  return get('/api/v2/users/current', authHeaders())
}

function createPage({ url }) {
  var params = {
    url: url
  }
  return post('/api/v2/stories/add_page', params, authHeaders())
}

function createStory({ pageId, text, rank }) {
  var params = {
    page_id: pageId,
    text:    text,
    rank:    rank
  }
  return post('/api/v2/stories', params, authHeaders())
}

// main
doorkeeper.authorize(function() {
  getCurrentUser().done(function(resp) {
    $('#current-user').text(resp.username)
  })

  // disable submit
  $("#story-form").submit(function(event) {
    event.preventDefault();
  });

  // instead use submitHandler
  $("#story-form").validate({
   submitHandler: function(form) {
     var data = storyData()
     console.log(data)
     createPage({
       url: data.link
     }).done(function(pageResp) {
       console.log('pageResp', pageResp)

       var pageId = pageResp.id

       createStory({
         pageId: pageId,
         text:   data.highlight,
         rank:   data.rank,
       }).done(function(storyResp) {
         console.log('storyResp', storyResp)
         $("#success-message").show('slow')
       })
     })
   }
  });

  $("#logout").click(function(e) {
    e.preventDefault()
    localStorage.clear()
    $("#logout-message").show('slow')
    console.log(localStorage)
  })
});

