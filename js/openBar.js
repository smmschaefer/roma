$(document).ready(function() {
	
	$( "#barMenu" ).click(function() {
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
 	 
	});
	*/
	$( "#sleekButton" ).click(function() {
	  $( "#sleekMenu" ).fadeToggle("slow");
	  $('html, body').css('overflow', 'scroll');  
 	 
	 });
	 
		
  	$( "#dinnerButtonTwo" ).click(function() {
  		$('section.mobileMain').fadeOut();
  		$('section.mobileDinner').fadeOut();
  				$('section.mobileLunch').fadeOut();
  	   	    	$('section.mobileDrinks').fadeOut();
  	   		    $('section.mobileDolci').fadeOut();
				$('section.mobileDinner').fadeIn();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
				$( "#sleekMenu" ).fadeOut("slow");
  			if(!$("section.mobileDinner").is(':visible')) {
  				$('section.mobileMain').fadeOut();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
  				$( "section.mobileDinner" ).fadeIn("slow");
  			}	
  	});

  	$( "#lunchButtonTwo" ).click(function() {
  		$('section.mobileMain').fadeOut();
  		$('section.mobileLunch').fadeOut();
  				$('section.mobileDinner').fadeOut();
  	   		    $('section.mobileDrinks').fadeOut();
  	   		    $('section.mobileDolci').fadeOut();
				$('section.mobileLunch').fadeIn();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
				$( "#sleekMenu" ).fadeOut("slow");
  			if(!$("section.mobileLunch").is(':visible')) {
  				$('section.mobileMain').fadeOut();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
  				$('section.mobileLunch').fadeIn();
  			} 
  	});

  	$( "#wineButtonTwo" ).click(function() {
				$('section.mobileMain').fadeOut();
  	            $('section.mobileLunch').fadeOut();
  				$('section.mobileDolci').fadeOut();
  				$('section.mobileDinner').fadeOut();
				$('section.mobileDrinks').fadeIn();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
				$( "#sleekMenu" ).fadeOut("slow");
  			if(!$("section.mobileDrinks").is(':visible')) {
  				$('section.mobileMain').fadeOut();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
  				$('section.mobileDrinks').fadeIn();
  			} 
  	});

  	$( "#dolciButtonTwo" ).click(function() {
  		$('section.mobileMain').fadeOut();
  		$('section.mobileDolci').fadeOut();
  		 		$('section.mobileDrinks').fadeOut();
  				$('section.mobileLunch').fadeOut();
  				$('section.mobileDinner').fadeOut();
				$('section.mobileDolci').fadeIn();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
				$( "#sleekMenu" ).fadeOut("slow");
  			if(!$("section.mobileDolci").is(':visible')) {
  				$('section.mobileMain').fadeOut();
				var targetOffset= $("#home").offset().top;
		   	 	 $('html, body').animate({scrollTop: targetOffset + 40}, 1000);
  				$('section.mobileDolci').fadeIn();
  			} 
  	});
	 

});