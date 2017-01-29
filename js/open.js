/*******************
This JS function drops and hides menu options
******************/

$(document).ready(function() {

$( "#mainMenu" ).click(function() {
  $('.divBtn').fadeOut();
  $('#hours').fadeOut();
  $( "#flexMenu" ).fadeToggle("slow");
  $('html, body').css('overflow', 'scroll');  
  $('section.mobileMain').fadeOut();
 // $('.stuck').css('position', 'auto');
   // $('.stuck').css('overflow', 'scroll');
  // $('#wrapper').css('position', 'auto');
});

$( "#dinnerButton" ).click(function() {
	$('.divBtn').fadeOut();
	$('html, body').css('overflow', 'scroll');  
	//$('.stuck').css('position', 'auto');
//	$('.stuck').css('overflow', 'scroll');
	//$('#wrapper').css('position', 'auto');
	
		if(!$("#menuDropDinner").is(':visible')) {
			$( "#menuDropDinner" ).fadeIn("slow");
			$('html, body').css('overflow', 'hidden');
		//	$('.stuck').css('position', 'fixed');
		//	$('.stuck').css('overflow', 'hidden');
			//$('#wrapper').css('position', 'fixed');  
		}	
});

$( "#lunchButton" ).click(function() {
	$('.divBtn').fadeOut();
	$('html, body').css('overflow', 'scroll');  
		if(!$("#menuDropLunch").is(':visible')) {
			$( "#menuDropLunch" ).fadeIn("slow");
			$('html, body').css('overflow', 'hidden');  
		} 
});

$( "#wineButton" ).click(function() {
    $('.divBtn').fadeOut();
	$('html, body').css('overflow', 'scroll');  
		if(!$("#menuDropWine").is(':visible')) {
			$( "#menuDropWine" ).fadeIn("slow");
			$('html, body').css('overflow', 'hidden');  
		} 
});

$( "#dolciButton" ).click(function() {
	$('.divBtn').fadeOut();
	$('html, body').css('overflow', 'scroll');  
		if(!$("#menuDropDolci").is(':visible')) {
			$( "#menuDropDolci" ).fadeIn("slow");
			$('html, body').css('overflow', 'hidden');  
		}
});


/**********************
TESTING
***********************/




});

