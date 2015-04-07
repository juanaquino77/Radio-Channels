var coleccion = require('./radioCollection');
var addClass = require("./addFixed");

Router = Backbone.Router.extend({
    	routes: {
        	"": "defaultRoute" 
    	},

    	defaultRoute: function() {
			var radios = new coleccion();
			radios.fetch()
			.success(function(data) {
            	_.each(data, function(array){
            		$(".radios").append("" +  array.name +  "</br> ");
            	})
	     	});
    	}
})

module.exports = Router;