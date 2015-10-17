define([
	'jquery',
	'backbone',
	'underscore',
	'text!../../template/thePhoto.html'
], function ($, Backbone, _, thePhoto) {
		var photo = Backbone.View.extend({
				el: '#container',
				initialize: function () {
					this.render()
				},
				render: function () {
					$("#container").css({
						"background":"url(resource/photo.jpg)",
						"background-size": "100%"
					})
					var template = _.template(thePhoto)
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
	return photo
})
