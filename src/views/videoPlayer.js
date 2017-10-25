var VideoPlayerView = Backbone.View.extend({
  model: Video,
  
  initialize: function() {
    this.on('change', this.render(), this);
    
  },
  
  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
