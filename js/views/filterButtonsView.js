var filterButtonView = require('./filterButtonView');
var contexto;
buttonsTemplate = _.template($('#buttonsTemplate').html());

	filterButtonsView = Backbone.View.extend({
		el: $('.filter-buttons'),
		template: buttonsTemplate,

		initialize: function() {
			contexto = this;
			this.render();
		},
	    
	    render: function() {
	        $(this.el).html(this.template());
            this.addButtons();
	    }, 
    	addButtons: function () {
            //this.addButton();
			_.each(this.collection, this.addButton)
    	},
	    addButton: function (model) {
            //new filterButtonView({collection: this.collection}); 
	        var buttonView = new filterButtonView({ model: model });
	        $("ul", contexto.el).append(buttonView.render());  
	    },
	});

	module.exports = filterButtonsView;
	
