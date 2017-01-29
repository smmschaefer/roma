$(document).ready(function() {

$(window).bind('scroll', function() {

     if ($(window).scrollTop() > 100) {
         $('#hours').fadeOut();
     }
     else {
         $('#hours').fadeIn();
     }
});
/****
not working

if ($( "#littleMenu" ).click(function() == true) {
	$('#hours').hide();
});

***/

});