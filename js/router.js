var coleccion = require('./radioCollection');
var vista = require('./radiosView');
var addClass = require("./addFixed");
var RadioChannelsList = new coleccion();


Router = Backbone.Router.extend({
    	routes: {
        	"": "defaultRoute",
            "nuevos": "new"           
    	},
    	defaultRoute: function() {
			RadioChannelsList.fetch()
			.success(function(data) {
                new vista({collection:data});
	     	});
    	},
        new: function() {
            
        }
})
module.exports = Router;