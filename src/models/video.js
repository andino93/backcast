var Video = Backbone.Model.extend({
  
  default: 'hello',

  initialize: function(video) {
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('url', video.snippet.thumbnails.default.url);
  },

  select: function() {
    new VideoPlayerView({
      el: '.player',
      model: this
    });
  },

});
