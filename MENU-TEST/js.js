$(function() {
	$('.nav-toggle-class').on('click', function() {
		$('.wrapper').toggleClass('nav-open');
		$('.mobile-navigation').toggleClass('nav-open');
		$('#nav-icon3').toggleClass('open');
	});
});


jQuery(document).ready(function( $ ) {


var menu = $('.mobile-navigation');
var menu_a = menu.find('a');

menu_a.on('click', function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$('.mobile-navigation').toggleClass('nav-open');
		$('.wrapper').toggleClass('nav-open');
		setTimeout(function() {
			window.location.href = url;
				}, 600);
       
});
});