$(document).ready(function() {
	
$("#slidePress > div:gt(0)").hide();

setInterval(function() { 
  $('#slidePress > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slidePress');
},  15000);

});
