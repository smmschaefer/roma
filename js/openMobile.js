$(document).ready(function() {
	
	 $( "#littleMenu" ).click(function() {
		/* if($('section.mobileDinner'&&'section.mobileLunch').is('slideDown'))
			 {
		 		 	 	 $('section.mobileDinner').slideUp();
						 $('section.mobileLunch').slideUp();
			 }*/
	/*	 $('#hours').slideUp();*/
	 	 $('section.mobileDinner').fadeOut();
		 $('section.mobileLunch').fadeOut();
		 $('section.mobileDrinks').fadeOut();
		 $('section.mobileDolci').fadeOut();
	 	 $('section.mobileMain').fadeIn();
	 	 $( "#flexMenuTwo" ).fadeToggle("slow");  
	});
		
	$( "#dinnerButtonTwo" ).click(function() {
		$('section.mobileMain').fadeIn();
		$('section.mobileDinner').fadeOut();
				$('section.mobileLunch').fadeOut();
	   	    	$('section.mobileDrinks').fadeOut();
	   		    $('section.mobileDolci').fadeOut();
			if(!$("section.mobileDinner").is(':visible')) {
				$('section.mobileMain').fadeOut();
				$( "section.mobileDinner" ).fadeIn("slow");
			}	
	});

	$( "#lunchButtonTwo" ).click(function() {
		$('section.mobileMain').fadeIn();
		$('section.mobileLunch').fadeOut();
				$('section.mobileDinner').fadeOut();
	   		    $('section.mobileDrinks').fadeOut();
	   		    $('section.mobileDolci').fadeOut();
			if(!$("section.mobileLunch").is(':visible')) {
				$('section.mobileMain').fadeOut();
				$('section.mobileLunch').fadeIn();
			} 
	});

	$( "#wineButtonTwo" ).click(function() {
		$('section.mobileMain').fadeIn();
		$('section.mobileDrinks').fadeOut();
	            $('section.mobileLunch').fadeOut();
				$('section.mobileDolci').fadeOut();
				$('section.mobileDinner').fadeOut();
			if(!$("section.mobileDrinks").is(':visible')) {
				$('section.mobileMain').fadeOut();
				$('section.mobileDrinks').fadeIn();
			} 
	});

	$( "#dolciButtonTwo" ).click(function() {
		$('section.mobileMain').fadeIn();
		$('section.mobileDolci').fadeOut();
		 		$('section.mobileDrinks').fadeOut();
				$('section.mobileLunch').fadeOut();
				$('section.mobileDinner').fadeOut();
			if(!$("section.mobileDolci").is(':visible')) {
				$('section.mobileMain').fadeOut();
				$('section.mobileDolci').fadeIn();
			} 
	});
	
	});