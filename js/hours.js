$(document).ready(function() {

	$( "#hoursMenu" ).click(function() {
	  $('.divBtn').fadeOut();
	  $('#flexMenu').fadeOut();
	  $( "#hours" ).fadeToggle("slow");
	/*  $('html, body').css('overflow', 'scroll');  */
	  $('section.mobileMain').fadeOut();
	});

});