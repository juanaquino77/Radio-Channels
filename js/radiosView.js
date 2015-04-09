var radioView = require('./radioView');

radiosTemplate = _.template($('#radiosTemplate').html());

	radiosView = Backbone.View.extend({
		el: $('.radiosContainer'),
		template: radiosTemplate,

		initialize: function() {
			contexto = this;
			this.render();
		},
	    
	    filter: function() {
    	},

	    render: function() {
	        $(this.el).html(this.template());
            this.addAll();
	    }, 
    	addAll: function () {
			_.each(this.collection, this.addOne)
    	},
	    addOne: function (model) { 
	        view = new radioView({ model: model });
	        $("ul", contexto.el).append(view.render());  
	    },
	});

	module.exports = radiosView;
	
