$(document).ready(function() {

$( "#openDiv" ).click(function() {
  $('.pressdivOne').fadeOut();
  $('.pressdivTwo').fadeOut();
  $( ".pressDivOne" ).fadeToggle("slow");
});

$( "#openDivTwo" ).click(function() {
  $('.pressdivOne').fadeOut();
  $('.pressdivTwo').fadeOut();
  $( ".pressDivTwo" ).fadeToggle("slow");
});


});