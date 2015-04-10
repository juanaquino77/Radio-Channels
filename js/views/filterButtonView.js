var radiosView = require('./radiosView');
var coleccion = require('../collections/radioCollection');

buttonTemplate = _.template($('#buttonTemplate').html());

buttonView = Backbone.View.extend({
	tagName: 'li',
   	template: buttonTemplate,
	events: {
	    "click .buttonName" : "filtro"
	},
  
  initialize: function(){
  },

  filtro : function(){
    Backbone.history.navigate('radiochannel/'+ this.model.name,{trigger:true});
  },

	render : function(){
		return $(this.el).append(this.template(this.model)); 
	}
})

module.exports = buttonView;