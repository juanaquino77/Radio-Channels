var canciones = require('./songCollection')


radioStation = Backbone.Model.extend ({

    defaults : {
        frequency : '',
        name : '',
        logo : ''
    }
});

module.exports = radioStation;