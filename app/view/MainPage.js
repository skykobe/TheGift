define([
	'jquery',
	'backbone',
	'underscore',
	'text!../../template/main.html',
	'css/semantic/dist/semantic.min'
], function ($, Backbone, _, page) {
		var main = Backbone.View.extend({
				el: '#container',
				initialize: function () {
						this.render()
					this.MainShow();
				},
				render: function () {
						//$("body").css("background","url()")
						$("#container").css({
							"background":"url(resource/mainPage.jpg)",
							"background-size": "100%",
							"height":"101.4%"
						})
						var template = _.template(page)
						this.$el.html(template)
						//this.MainShow();
						//setTimeout(this.calculTime,2000)
				},
				events: {
						'click #btn_menu': 'ShowMenu'
				},
				ShowMenu: function () {
					$("#container").css({
						"height":"100%"
					})
					$("#menu").sidebar('show');
				},
				MainShow: function () {
					var add_1 = 3, add_2 = 4,x = 1
					show()
					function show() {
						var now = new Date(),time_year = 0, time_hour = now.getHours(),
							time_min = now.getMinutes(), time_sec = now.getSeconds(),
							month = [31,28,31,30,31,30,31,31,30,31,30,31]
						var year = parseInt(now.getFullYear()),day = now.getDate();
						for(year -=1 ; year > 2011; year--) {
							if((year%4 == 0) || ((year%100 == 0)&&(year%400 == 0)))
							{
								time_year += 366
							} else {
								time_year += 365
							}
						}
						time_year += 58
						var mon = now.getMonth()+1
						for(var i = 1; i <= mon; i++) {
							time_year += month[i]
						}
						year = parseInt(now.getFullYear())
						if((year%4 == 0) || ((year%100 == 0)&&(year%400 == 0)) && mon > 2) {
							time_year += 1
						}
						time_year += day;
						$("#data").html(time_year+'天');
						$("#hour").html(time_hour+'时');
						$("#min").html(time_min+'分');
						$("#sec").html(time_sec+'秒');
						if(x%8 == 0) {
							$("#one").css('display','none')
							$("#one").attr("src","resource/"+add_1+".JPG").fadeIn(1200)
							$("#two").css('display','none')
							$("#two").attr("src","resource/"+add_2+".jpg").fadeIn(1200)
							if(add_1 == 1 && add_2 == 2) {
								add_1 = 3
								add_2 = 4
							} else {
								add_1 = 1
								add_2 = 2
							}
						}
						x++
						setTimeout(show,500)
					}
				}

		})
		return main
})
