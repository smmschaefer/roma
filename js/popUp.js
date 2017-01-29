$(document).ready(function() {

	$( "#imgPop01" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/carbonara.jpg");
	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
	  $("#rotateText").text("Spaghetti Carbonara");
	  
	  
	});
	
	$( "#imgPop02" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/lamb.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Rack of Lamb with Saffron Risotto");
	});
	
	$( "#imgPop03" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/panacoda.jpg");
	 	$("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		$("#rotateText").text("Panna Cotta");
	});
	
	$( "#imgPop04" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/tomato2.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Caprese");
	});
	
	$( "#imgPop05" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/squid.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("EDIT ME");
	});
	
	$( "#imgPop06" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/seafood4.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("EDIT ME");
	});
	
	$( "#imgPop07" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/pollo01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Panino con il Pollo e Minestrone");
	});
	
	$( "#imgPop08" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/prosciutto01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Panino al Prosciutto D.O.C.");
	});
	
	$( "#imgPop09" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/salciccia01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Panino con Salsiccia");
	});
	
	$( "#imgPop10" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/straccetti01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Straccetti con Ruchetta");
	});
	
	$( "#imgPop11" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/tartar4.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Carpaccio Grana e Arugula");
	});
	
	$( "#imgPop12" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/tiramisu01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Tiramisù");
	});
	
	$( "#imgPop13" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/Tuna.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Tartara di Tonno e Finocchi");
	});
	
	$( "#imgPop14" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/fetBolognese.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("EDIT ME");
	});
	
	$( "#imgPop15" ).click(function() {
	  $('#popUpBox').fadeToggle("slow");
	  $("#rotateImg").attr("src","img/vegetariano01.jpg");
	  	  $("#galleryBox").css('opacity', '1.0').fadeTo(1000, 0);
		  $("#rotateText").text("Panino Vegetariano");
	});
	
	
	$( "#resetPopUp").click(function() {
		$('#popUpBox').fadeOut("slow");
		$("#galleryBox").css('opacity', '1.0').fadeIn("slow");
	});

});