var radioView = require('./radioView');


	 radiosView = Backbone.View.extend({
		el: $('.radios'),
		template: radiosTemplate,
		

		events: {
		    "click button.botoncito" : "filtro"

		    },

		initialize: function() {
    
			this.render();
			
		},
	    
	    filtro: function() {
    		console.log("this");
    	},

	    render: function() {

        	_.each(this.collection, function(num){
            	$('.radios').append(num.name + "<br>")
            })
           
	    }, 


	});

	module.exports = radiosView;
	
