var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',
  collection: new Videos(window.exampleVideoData),

  initialize: function() {
    // console.log(this.videos.get('id'))
    this.render();
    // console.log(this.videos.forEach(model => console.log(model)))
    // console.log(this.model.attributes.get('title'))
    new VideoListView(this.collection),

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
