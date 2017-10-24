var VideoListEntryView = Backbone.View.extend({
  model: Video,
  // el: '.video-list-entry',
  
  events: {
    'click': 'toggle'
  },
  
  initialize: function() {
    this.render();    
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  toggle: function(e) {
    this.model.select();
  },
  // make function to handle title click

  template: templateURL('src/templates/videoListEntry.html')

});
