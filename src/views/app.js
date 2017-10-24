var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.fakeVideoData);
    this.player = new VideoPlayerView(this.videos);
    this.videoList = new VideoListView(this.videos);
    this.search = new SearchView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
