var Videos = Backbone.Collection.extend({
  
  key: window.YOUTUBE_API_KEY,

  model: Video,
  
  search: function(searchStr) {
    let data = {
      query: searchStr,
      maxResults: 5,
      key: key,
      
    };
  }
  
});
