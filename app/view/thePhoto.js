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
						"background-size": "100%",
						"height": '250%'
					})
					var template = _.template(thePhoto)
					this.$el.html(template)
				},
				events: {
					'click #btn_menu': 'ShowMenu',
					'click #picture': 'ShowPic'
				},
				ShowMenu: function () {
					$("#container").css({
						"height":"250%"
					})
					$("#menu").sidebar('show');
				},
				ShowPic: function (record) {
					var add = record.currentTarget.src
					var word = record.currentTarget.alt
					$("#pic").attr('src',add)
					$("#word").html(word)
					$("#S").modal('show')
				}
		})
	return photo
})
