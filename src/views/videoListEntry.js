var VideoListEntryView = Backbone.View.extend({
  model: Video,
  el: '.video-list',
  
  events: {
    'click': 'toggle'
  },
  
  initialize: function(video) {
    // console.log(this)
    this.render(video); 
  },
  
  render: function(video) {
    // console.log('entry', video)
    // let title = {
    //   title: 'this is a test',
    //   description: 'description'
    // };
    // console.log(this.model.snippet)
    // console.log('---------', video.attributes)
    this.$el.append(this.template(video.attributes));
    return this;
  },
  
  toggle: function(video) {
    video.model.select();
  },
  
  // make function to handle title click

  template: templateURL('src/templates/videoListEntry.html')

});
