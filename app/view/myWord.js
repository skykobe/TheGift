define([
	'jquery',
	'backbone',
	'underscore',
	'text!../../template/word.html'
], function ($,Backbone, _, wordPage) {
		var word = Backbone.View.extend({
				//$("#container").css()
				el: '#container',
				initialize: function () {
					this.render()
				},
				render: function () {
					$("#container").css('background','url(resource/word.jpg)')
					var template = _.template(wordPage)
					this.$el.html(template)
				},
				events: {
					'click #btn_menu': 'ShowMenu'
				},
				ShowMenu: function () {
					$("#container").css({
						"height":"100%"
					})
					$("#menu").sidebar('show');
				}
		})
		return word
})
