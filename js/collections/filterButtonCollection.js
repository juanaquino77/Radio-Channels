var button = require('../models/filterButton')

buttonCollection = Backbone.Collection.extend ({
	model : button,
	url : 'data/buttons.json',
	initialize : function() {
	}
});

module.exports = buttonCollection;	