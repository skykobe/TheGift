define([
	'backbone',
	'jquery',
	'css/semantic/dist/semantic',
	'app/view/MainPage',
	'app/view/myWord'
], function (Backbone, $, x, main,word) {
	var router = Backbone.Router.extend({
			routes: {
				"": "ShowLog",
				"mainPage": "ShowMainPage",
				"word": "ShowWord"
		  },
			ShowLog: function () {
				$('#LW').click(function () {
					$("#log_window").modal('show');
				})
			},
			ShowMainPage: function () {
				$("#log_window").modal('hide');
				new main()
			},
			ShowWord: function () {
				$("#log_window").modal('hide');
				new word()
			}
	})
	return router
})
