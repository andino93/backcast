var AppView = Backbone.View.extend({
  model: Video,
  el: '#app',
  collection: new Videos(window.exampleVideoData),
  
  // event: {
  //   'search'
  // },
  
  initialize: function() {
    this.render();

    new VideoListView({collection: this.collection, model: Video}),

    new VideoPlayerView({
      el: '.player',
      model: this.collection.models[0]
      
    });
    new SearchView({
      el: '.search',
      collection: this.collection
    });
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
