var radio = require('./radioStation')


radioCollection = Backbone.Collection.extend ({
	model : radio,
	url : 'data/radios.json',
	initialize : function() {
	}
});

module.exports = radioCollection;	