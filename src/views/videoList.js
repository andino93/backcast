var VideoListView = Backbone.View.extend({
  model: Video,
  el: '.list',

  initialize: function(videoList) {
    this.render();
    // this.render(videoList);
    // this.on('change', this.render(), this);
    // console.log(videoList.collection)
    // this.$el.empty()
    _.each(videoList.models, (videoEntry, index) => {
      // debugger;
      new VideoListEntryView(videoEntry);
      // this.$el.append(video.el.innerHTML);
      // console.log('el', video)
    });
  },
  
  render: function(videoList) {
    // console.log(this.model.attributes.title)
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')
});
  