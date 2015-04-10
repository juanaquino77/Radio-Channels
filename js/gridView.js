var radiosView = require('./radiosView');
var coleccion = require('./collections/radioCollection');
var RadioChannelsList = new coleccion();
//var coleccion = require('./radioCollection');
//var radiosTemplate2 = _.template($('#radiosTemplate2').html());
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
    /* //var mostrar = new radiosView({template: radiosTemplate});
     //mostrar.render();
        RadioChannelsList.fetch()
        .success(function(data) {
            new radiosView({collection:data});
        });
      console.log(vista);*/
      alert("nada");

    },
    compact: function(){
     // new radiosView({template: radiosTemplate2});
      alert("nada2");
    },
	 render : function(){
    $(this.el).html(''); 
		$(this.el).append(this.template()); 
	 }
})

module.exports = gridView;