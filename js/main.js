window.$ = require('jquery');
window._ = require("underscore")
window.Backbone = require('backbone');
Backbone.$ = $;
var Router = require('./router');


var appRouter = new Router();
Backbone.history.start();

