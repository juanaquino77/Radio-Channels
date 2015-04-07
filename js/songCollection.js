var song = require('./song')


Songs = Backbone.Collection.extend ({
	model : song,
	url : 'data/data.json',
	initialize : function() {
	}
});

module.exports = Songs;

