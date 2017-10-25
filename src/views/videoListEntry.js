var VideoListEntryView = Backbone.View.extend({
  model: Video,
  
  events: {
    'click': 'toggle'
  },
  
  render: function(video) {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  toggle: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
