var SearchView = Backbone.View.extend({

  initialize: function() {
    this.on('click', this.search);
    this.render();
    this.search('blockchain');
  },

  render: function() {
    return this.$el.html(this.template());
  },
  
  search: function(string) {
    this.collection.search(string);
  },

  template: templateURL('src/templates/search.html')

});
