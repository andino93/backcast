var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },



  render: function() {
    return this.$el.html(this.template());
  },

  template: templateURL('src/templates/search.html')

});
