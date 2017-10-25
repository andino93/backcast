var Videos = Backbone.Collection.extend({
  
  key: window.YOUTUBE_API_KEY,

  model: Video,
  
  search: function(searchStr) {
    let data = {
      query: searchStr,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet'
    };
    
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: data,
      sucess: (data) => console.log('woot', JSON.stringify(data)),
      error: (data) => console.log('failed', data)
    });
  },
});