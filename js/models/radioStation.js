var canciones = require('../collections/songCollection')


radioStation = Backbone.Model.extend ({

    defaults : {
        frequency : '',
        name : '',
        logo : ''
    }
});

module.exports = radioStation;