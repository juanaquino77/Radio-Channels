var radioView = require('./radioView2');

radiosTemplate = _.template($('#radiosTemplate2').html());

	radiosView2 = Backbone.View.extend({
		el: $('.radiosContainer'),
		template: radiosTemplate,

		initialize: function() {
			contexto = this;
			this.render();
		},
	   
	    render: function() {
	        $(this.el).html(this.template());
            this.addAll();
	    }, 
    	addAll: function () {
			_.each(this.collection, this.addOne)
    	},
	    addOne: function (model) { 
	        view = new radioView2({ model: model });
	        $("ul", contexto.el).append(view.render());  
	    },
	});

	module.exports = radiosView2;
	