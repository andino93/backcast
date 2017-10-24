var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
    new VideoListView({
      el: '.list',
      collection: this.videos
    }),
    new VideoPlayerView({
      el: '.player'
    });
    new SearchView({
      el: '.search'
    });
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
