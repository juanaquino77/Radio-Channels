var filterButtonView = require('./filterButtonView');
var context;
buttonsTemplate = _.template($('#buttonsTemplate').html());

filterButtonsView = Backbone.View.extend({
	el: $('.filter-buttons'),
	template: buttonsTemplate,

	initialize: function() {
		context = this;
		this.render();
	},
    
    render: function() {
        $(this.el).html(this.template());
        this.addButtons();
    }, 
	addButtons: function () {
		_.each(this.collection, this.addButton)
	},
    addButton: function (model) {
        var buttonView = new filterButtonView({ model: model });
        $("ul", context.el).append(buttonView.render());  
    },
});

module.exports = filterButtonsView;
	
