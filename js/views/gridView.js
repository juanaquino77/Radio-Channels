var radiosView = require('./radiosView');
var radiosView2 = require('./radiosView2');
var coleccion = require('../collections/radioCollection');
var RadioChannelsList = new coleccion();
var radioTemplate2 = _.template($('#radioTemplate2').html());
var radiosTemplate = _.template($('#radiosTemplate').html());

gridTemplate = _.template($('#gridTemplate').html());

gridView = Backbone.View.extend({
  el: $('.views'),
   	template: gridTemplate,
	events: {
      "click .compact": "compact",
	    "click .mosaic": "mosaic",
  },

    initialize: function(){
    	this.render();
    },

    mosaic: function(){
      var list = new coleccion();
      list.fetch()
      .success(function(data) {
        var vista = new radiosView({collection: data});
      })
    },
    compact: function(){
      var list = new coleccion();
      list.fetch()
      .success(function(data) {
        var vista = new radiosView2({collection:data});
      })
    },
	 render : function(){
    $(this.el).html(''); 
		$(this.el).append(this.template()); 
	 }
})

module.exports = gridView;