var coleccion = require('./collections/radioCollection');
var radiosView = require('./views/radiosView');
var radiosView2 = require('./views/radiosView2');
var addClass = require("./addFixed");
var filterButtons = require("./collections/filterButtonCollection");
var buttonView = require('./views/filterButtonView');
var buttonsView = require('./views/filterButtonsView');
var grid = require('./views/gridView');
var RadioChannelsList = new coleccion();
var buttons = new filterButtons();


Router = Backbone.Router.extend({
    routes: {
        "": "defaultRoute",
        'radiochannel/:name': 'radiochannel'       
    },

    defaultRoute: function() {
        var gridV = new grid();
        buttons.fetch()
        .success(function(data) {
            new buttonsView({collection:data});
        })
        .fail( function(){
            alert("fail");
        });         
        RadioChannelsList.fetch()
        .success(function(data) {
            new radiosView({collection:data});
        });
    },
    radiochannel: function(name) {
        var radioCollection = new coleccion;
        var genero = name;
/*  volvemos a cargar la vista de los botones y de las 2 vistas 
    porque sino cuando refrescamos se pierden esas vistas    */
        var gridView = new grid();
        buttons.fetch()
        .success(function(data) {
            new buttonsView({collection:data});
        });
        radioCollection.fetch()
        .success(genero, function(data) {
            if(genero != "all") {   
/*  hace el filtrado de la coleccion recorriendo el arreglo de generos y devuelve otro arreglo  */
                var match = _.filter(data, function(arr) { 
                    if(_.indexOf(arr.genre, genero) !== -1) 
                        return arr;
                    });
                new radiosView({collection:match});
            }
            else
                new radiosView({collection:data});
        })
    }
})
module.exports = Router;