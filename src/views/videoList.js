var VideoListView = Backbone.View.extend({
  model: Video,
  el: '.list',

  initialize: function(videoList) {
    this.render(videoList);
    // this.on('change', this.render(), this);
    // console.log(videoList.collection)
    _.each(videoList.models, videoEntry => {
      new VideoListEntryView(videoEntry);
    });
  },
      // for (var i = 0; i < videoList.models.length; i++) {
      //   new VideoListEntryView(videoList.models[i]);
      // }
  
  render: function(videoList) {
    // console.log(this.model.attributes.title)
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
  