var radio = require('../models/radioStation');

radioCollection = Backbone.Collection.extend ({
	model : radio,
	url : 'data/radios.json'
});

module.exports = radioCollection;	