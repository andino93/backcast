var VideoListView = Backbone.View.extend({
  model: Video,
  el: '.list',
  
  events: {
    'click': 'toggle'
  },

  initialize: function() {
    this.render();
    this.$el.find('.video-list').append(this.collection.map((videoEntry, index) => {
      return new VideoListEntryView({model: videoEntry}).render();
    }));
  },
  
  render: function(videoList) {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
    