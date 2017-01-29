$(document).ready(function() {
	
$("#slidePressMobile > div:gt(0)").hide();

setInterval(function() { 
  $('#slidePressMobile > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slidePressMobile');
},  12000);

});
