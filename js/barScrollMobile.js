$(document).ready(function() {

	$("#barMobileUp").click(function(e){
	/*	$('#flexMenuTwo').fadeOut();*/
	/*	$('section.mobileMain').fadeIn();
		$('section.mobileDinner').fadeOut();
		$('section.mobileLunch').fadeOut();
	   	$('section.mobileDrinks').fadeOut();
	   	$('section.mobileDolci').fadeOut();*/
		var targetOffset= $("#home").offset().top;
   	  $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
   	  e.preventDefault();  
	  $('#scrollMobileTop').fadeIn("slow");
	  $('#sleekMenu').fadeIn("slow");
	 
	});
	


})