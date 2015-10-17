define([
	'backbone',
	'jquery',
	'css/semantic/dist/semantic',
	'app/view/MainPage',
	'app/view/myWord',
	'app/view/thePhoto'
], function (Backbone, $, x, main, word, photo) {
	var router = Backbone.Router.extend({
			routes: {
				"": "ShowLog",
				"mainPage": "ShowMainPage",
				"word": "ShowWord",
				"photo": "ShowPhoto"
		  },
			ShowLog: function () {
				$('#LW').click(function () {
					$("#log_window").modal('show');
				})
			},
			ShowMainPage: function () {
				$("#log_window").modal('hide');
				if(this.main) {
					this.main.render()
				} else {
					this.main = new main()
				}
			},
			ShowWord: function () {
				if(this.word) {
					this.word.render()
				} else {
					this.word = new word()
				}
			},
			ShowPhoto: function () {
				if(this.photo) {
					this.photo.render()
				} else {
					this.photo = new photo()
				}
			}
	})
	return router
})
