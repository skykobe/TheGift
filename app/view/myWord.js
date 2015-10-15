define([
	'jquery',
	'backbone',
	'underscore',
	'text!../../template/word.html'
], function ($,Backbone, _, word) {
		var word = Backbone.View.extend({
				//$("#container").css()
				el: '#container',
				initialize: function () {
					this.render()
				},
				render: function () {
					$("#container").css('background','url(/resource/word.jpg)')
				}
		})
		return word
})
