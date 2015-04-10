radioTemplate = _.template($('#radioTemplate2').html());

radioView2 = Backbone.View.extend({
	tagName: 'li',
   	template: radioTemplate,
    initialize: function(){
    	this.render();
    },
	render : function(){
		return $(this.el).html(this.template(this.model)) 
	}
})

module.exports = radioView2;