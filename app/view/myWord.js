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
						"height":"450%"
					})
				},
				events: {
					'click #btn_menu': 'ShowMenu',
					'click #back': 'BackTotop'
				},
				ShowMenu: function () {
					$("#menu").sidebar({
						'scrollLock': true,
						'onHide': function () {
							if(location.hash === '#word') {
								$("#container").css({
									"height": "450%"
								})
							}
						}
					})
					$("#menu").sidebar('show');
				},
				BackTotop: function () {
					document.body.scrollTop = 0;
				}
		})
		return word
})
