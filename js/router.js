var coleccion = require('./radioCollection');
var vista = require('./radiosView');
var addClass = require("./addFixed");
var filterButtons = require("./filterButtonCollection");
var buttonView = require('./filterButtonView');
var buttonsView = require('./filterButtonsView');
var RadioChannelsList = new coleccion();
var buttons = new filterButtons();

Router = Backbone.Router.extend({
    	routes: {
        	"": "defaultRoute",
            "nuevos": "new"           
    	},
    	defaultRoute: function() {
            buttons.fetch()
            .success(function(data) {
                new buttonsView({collection:data});
            })
            .fail( function(){
                console.log("fail")
            });			
            RadioChannelsList.fetch()
			.success(function(data) {
                new vista({collection:data});
	     	});
    	},
        new: function() {
            
        }
})
module.exports = Router;