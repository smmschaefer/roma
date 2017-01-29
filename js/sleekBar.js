$(document).ready(function() {
	
	$( "#sleekButton" ).click(function() {
	  $('.divBtn').fadeOut();
	  $('#hours').fadeOut();
	  $('#flexMenu').fadeOut();
	  $( "#newMenu" ).fadeToggle("slow");
	  $('html, body').css('overflow', 'scroll');  
	  $('section.mobileMain').fadeOut();

	});
		/*
	$( "#barMenuTwo" ).click(function() {
	  $('.divBtn').fadeOut();
	  $('#flexMenuTwo').fadeOut();
  	  $('section.mobileDinner').fadeOut();
 	  $('section.mobileLunch').fadeOut();
 	  $('section.mobileDrinks').fadeOut();
 	  $('section.mobileDolci').fadeOut();
  	  $('section.mobileMain').fadeIn();
	  $( "#newMobileMenu" ).fadeToggle("slow");
	  $('html, body').css('overflow', 'scroll');  
 	 
	});*/
		

});