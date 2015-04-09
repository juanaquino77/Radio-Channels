var radiosView = require('./radiosView');
var coleccion = require('./radioCollection');

buttonTemplate = _.template($('#buttonTemplate').html());

buttonView = Backbone.View.extend({
	//el: $('.filter-buttons'),
	tagName: 'li',
   	template: buttonTemplate,
	events: {
	    "click .buttonName" : "filtro"
	},
    initialize: function(){
    	//this.render();
    },
    filtro : function(){
    	var radioCollection = new coleccion;
		var genero = this.model.name;
    	radioCollection.fetch()
		.success(genero, function(data) {
			if(genero != "all") {	
    			var match = _.filter(data, function(arr) { 
      				if(_.indexOf(arr.genre, genero) !== -1) 
      					return arr
    				});
      			new radiosView({collection:match});
			}
			else
        		new radiosView({collection:data});
		})
    },
	render : function(){
		//$(this.el).append(this.template(this.collection[0]));
		//$(this.el).append(this.template(this.collection[2]));
		return $(this.el).append(this.template(this.model)); 
	}
})

module.exports = buttonView;