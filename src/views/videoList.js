var VideoListView = Backbone.View.extend({
  model: Video,
  // el: '.video-list',

  initialize: function() {
    this.render();
    // this.on('change', this.render(), this);
    _.each(this.collection, videoEntry => {
      new VideoListEntryView({
        el: '.video-list div',
        video: videoEntry});
    });
  },
  
  render: function() {
    
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
  