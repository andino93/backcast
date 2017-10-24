var VideoListEntryView = Backbone.View.extend({
  model: Video,
  
  initialize: function() {
    this.render();
  //   // this.videos = new Videos(window.exampleVideoData);
    // this.render()
    // console.log(this.model.attributes.snippet.title)
    // events attribute
    // console.log(this.model.select.called = true);
    // console.log(this.model.select.called);
    // this.on('click:title', !this.model.select.called);
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  // make function to handle title click

  template: templateURL('src/templates/videoListEntry.html')

});
