$(document).ready(function() {

     var changeAlert = document.querySelector(".alertText");

     $("#subNow").click(function(e) {
       e.preventDefault();
       var res = $("form").serializeArray().map(function(input) {
		   return input.value
       }).join(" ");
       changeAlert.innerHTML = res;

     });

   });


/*
   return input.name + ":" + input.value
   
   */