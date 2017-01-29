$(document).ready(function() {
	$(".goHome").click(function(e){
  	  var targetOffset= $("#home").offset().top;
  	  $('html, body').animate({scrollTop: targetOffset}, 2000);
  	  e.preventDefault();    
	});

	$(".goOne").click(function(e){
  	  var targetOffset= $("#secOne").offset().top;
   	  $('html, body').animate({scrollTop: targetOffset - 100}, 1500);
   	  e.preventDefault();    
	});

	$(".goTwo").click(function(e){
		var targetOffset= $("#secTwo").offset().top;
   	 $('html, body').animate({scrollTop: targetOffset - 100}, 1500);
   	 e.preventDefault();    
	});

	$(".goThree").click(function(e){
    var targetOffset= $("#secThree").offset().top;
    $('html, body').animate({scrollTop: targetOffset - 100}, 1500);
    e.preventDefault();    
    });
	
	$(".goFour").click(function(e){
    var targetOffset= $("#secFour").offset().top;
    $('html, body').animate({scrollTop: targetOffset - 120}, 1500);
    e.preventDefault();    

});

})