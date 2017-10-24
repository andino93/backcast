var VideoListEntryView = Backbone.View.extend({
  model: Video,
  el: '.video-list div',
  
  events: {
    'click': 'toggle'
  },
  
  initialize: function(video) {
    // console.log(this)
    this.render(video);    
    // console.log(this.Video.get('snippet'))
  },
  
  render: function(video) {
    // let title = {
    //   title: 'this is a test',
    //   description: 'description'
    // };
    // console.log(this.model.snippet)
    this.$el.html(this.template(video.attributes));
    return this;
  },
  
  toggle: function(e) {
    this.model.select();
  },
  // make function to handle title click

  template: templateURL('src/templates/videoListEntry.html')

});
