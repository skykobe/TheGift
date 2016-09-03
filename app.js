require.config({
	"paths": {
		"jquery": "app/lib/jquery-1.11.2",
		"backbone": "app/lib/Backbone.js/backbone",
		"underscore": "app/lib/Backbone.js/underscore",
		"text": "app/lib/text"
	}
})
require([
	'app/Router/router.js',
	'css/semantic/dist/semantic'
], function (router) {
		new router();
		Backbone.history.start();
		$(".modal").modal({
			allowMultiple: true
		}) /*把所有弹出层都设置为可以遮盖*/
		$('#log').click(function () {
			/*if($('#user_name').val() === '老公仔' && $("#user_pass").val() === '622306') {
				location.hash = 'mainPage'
			}*/
			
			if($('#user_name').val() === '1' && $("#user_pass").val() === '1') {
				location.hash = 'mainPage'
			} else{
				$("#error").modal('show')
			}
		})
})
