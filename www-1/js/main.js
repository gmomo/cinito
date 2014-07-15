//$(function() {
//
//	$(".touch")
//			.on(
//					"swipeleft",
//					function(event) {
//						$(".text")
//								.html(
//										"<span>Swiped Left!</span><br>hh<br>hh<br>hh<br>hh<br>hh<br>hh")
//								.css({
//									"color" : "purple",
//									"font-size" : "500%",
//									"text-align" : "center"
//								});
//					});
//	$(".touch")
//			.on(
//					"swiperight",
//					function(event) {
//						$(".text")
//								.html(
//										"<span>Swiped Right!</span><br>hh<br>hh<br>hh<br>hh<br>hh")
//								.css({
//									"color" : "green",
//									"font-size" : "500%",
//									"text-align" : "center"
//								});
//					});
//});

$(function() {
	

$(document).on('swipeleft swiperight', '#page', function(e) {
	
	console.log(e);
	
	if (e.type === 'swipeleft') {
		$.mobile.changePage('#pag1', {
			transition : 'slide'
		});
	} else if (e.type === 'swiperight') {
		$.mobile.changePage('#pag2', {
			transition : 'slide',
			reverse : true
		});
	}
});
});