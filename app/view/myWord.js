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
					var template = _.template(wordPage)
					this.$el.html(template)
					/*var height1 = document.body.scrollHeight
					console.log(height1)*/
					$("#container").css({
						'background':'url(resource/word.jpg)',
						"background-size": "100%",
						"height":"350%"
					})
				},
				events: {
					'click #btn_menu': 'ShowMenu'
				},
				ShowMenu: function () {
					$("#menu").sidebar({
						'scrollLock': true,
						'onHide': function () {
							$("#container").css({
								"height": "350%"
							})
						}
					})
					$("#menu").sidebar('show');

				}
		})
		return word
})
