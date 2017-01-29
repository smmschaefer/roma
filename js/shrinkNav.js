

$(function(){
  $('#mainMobileNavBar').data('size','big');
});

if($(window).width() <= 790){


$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('#mainMobileNavBar').data('size') == 'big')
    {
		$('#addressOnly').css('visibility','hidden')
		$('#menuImgMobile').css('visibility','hidden');
		$('#menuImgRight').css('visibility','hidden');
		$('#mainMobileNavBar').fadeOut("slow");
	    $('#scrollMobileTop').fadeIn("slow");
		$('#romaMobile').css('visibility','hidden');
		
        $('#mainMobileNavBar').data('size','small');
        $('#mainMobileNavBar').stop().animate({
            height:'40px'
        },500);

    }
}
else
  {
    if($('#mainMobileNavBar').data('size') == 'small')
      {
		  $('#addressOnly').css('visibility','visible')
		  $('#menuImgMobile').css('visibility','visible');
		  $('#menuImgRight').css('visibility','visible');

		  $('#mainMobileNavBar').fadeIn();
		  $('#scrollMobileTop').fadeOut("slow");
		  $('#romaMobile').css('visibility','visible');
		  $('#sleekMenu').fadeOut("slow");  

      	  $('#mainMobileNavBar').data('size','big');
      	  $('#mainMobileNavBar').stop().animate({
            height:'100px'
      	  },500);
		
      }  
  }
});

}

