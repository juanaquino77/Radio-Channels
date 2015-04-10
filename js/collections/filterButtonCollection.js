var button = require('../models/filterButton')

buttonCollection = Backbone.Collection.extend ({
	model : button,
	url : 'data/buttons.json'
});

module.exports = buttonCollection;	