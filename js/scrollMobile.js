$(document).ready(function() {
	$(".goHome").click(function(e){
  	  var targetOffset= $("#home").offset().top;
  	  $('html, body').animate({scrollTop: targetOffset}, 500);
  	  e.preventDefault();    
	if(!$("section.mobileMain").is(':visible')) {
    	  $('section.mobileDinner').fadeOut();
   	  	  $('section.mobileLunch').fadeOut();
   	      $('section.mobileDrinks').fadeOut();
   	      $('section.mobileDolci').fadeOut();
		  $( "section.mobileMain" ).fadeIn("slow");
		  	  $('#sleekMenu').fadeOut();  
	}	
	});

	$(".goOneMobile").click(function(e){
	/*	$('#flexMenuTwo').fadeOut();*/
		$('section.mobileMain').fadeIn();
		$('section.mobileDinner').fadeOut();
		$('section.mobileLunch').fadeOut();
	   	$('section.mobileDrinks').fadeOut();
	   	$('section.mobileDolci').fadeOut();
  	  var targetOffset= $("#secOneMobile").offset().top;
   	  $('html, body').animate({scrollTop: targetOffset - 55}, 1500);
   	  e.preventDefault();  
	  $('#sleekMenu').fadeOut();  
	});

	$(".goTwoMobile").click(function(e){
	/*	$('#flexMenuTwo').fadeOut();*/
		$('section.mobileMain').fadeIn();
		$('section.mobileDinner').fadeOut();
		$('section.mobileLunch').fadeOut();
    	$('section.mobileDrinks').fadeOut();
	    $('section.mobileDolci').fadeOut();
		var targetOffset= $("#secTwoMobile").offset().top;
   	 $('html, body').animate({scrollTop: targetOffset - 55}, 1500);
   	 e.preventDefault();    
	 $('#sleekMenu').fadeOut();  
	});

	$(".goThreeMobile").click(function(e){
	/*	$('#flexMenuTwo').fadeOut();*/
		$('section.mobileMain').fadeIn();
		$('section.mobileDinner').fadeOut();
		$('section.mobileLunch').fadeOut();
    	$('section.mobileDrinks').fadeOut();
	    $('section.mobileDolci').fadeOut();
    var targetOffset= $("#secThreeMobile").offset().top;
    $('html, body').animate({scrollTop: targetOffset - 55}, 1500);
    e.preventDefault();  
	$('#sleekMenu').fadeOut();    
    });
	


})