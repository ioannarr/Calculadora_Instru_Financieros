//Tooltip de i de info 

$("#imagen1").hover(function(){
  $(this).css('cursor','pointer').attr('title','Click Me');
  },
  function(){
    $(this).css('cursor','auto');
  });
    
$("#imagen2").hover(function(){
      $(this).css('cursor','pointer').attr('title','Click Me');
      },
      function(){
        $(this).css('cursor','auto');
      });

$("#imagen3").hover(function(){
   $(this).css('cursor','pointer').attr('title','Click Me');
   },
    function(){
      $(this).css('cursor','auto');
    });

$("#imagen4").hover(function(){
  $(this).css('cursor','pointer').attr('title','Click Me');
  },
    function(){
      $(this).css('cursor','auto');
    });

//menu con efecto sticky{
  $(window).scroll(function() {
    if ($(document).scrollTop() > 250) {
      $("nav").addClass("fijo");
    } else {
      $("nav").removeClass("fijo");
    }
  });
 
//menu hamburguesa 
$(document).ready(function(){
  
  $("#hamburguesa").click(function(){
   
      if($("#hamburguesa").text() == "☰"){
       $("#hamburguesa").text("🞬");
      }else{
        $("#hamburguesa").text("☰");
      }
    $("li").toggle("slow");
  });
});  


//Voy al Top
$('#toTop').click( function(e) { 
  e.preventDefault();
  //Animamos sus propiedades CSS con animate
  $('html').animate({
      scrollTop: $("#simulador").offset().top  
  }, 1000);
} );

//menu hamburguesa se ve cuando la pantalla es mas chica



	// $(document).ready(function(){
	// 	$("#menu-hamburguesa").click(function() {
	// 		$("#lista-hamburguesa").toggle();
	// 	});
	// });




//modal fade In
$(document).ready(function(){
    $("#imagen1").click(function(){
      $("#ModalCuponCero").fadeIn("slow");     
    });
  });

  $(document).ready(function(){
    $(".close1").click(function(){
      $("#ModalCuponCero").remove("slow");    
    });
  });

  $(document).ready(function(){
    $("#imagen2").click(function(){
      $("#ModalBonoCupon").fadeIn("slow");     
    });
  });

  $(document).ready(function(){
    $(".close2").click(function(){
      $("#ModalBonoCupon").remove("slow");    
    });
  });

  $(document).ready(function(){
    $("#imagen3").click(function(){
      $("#ModalLetraMenor").fadeIn("slow");     
    });
  });

  $(document).ready(function(){
    $(".close3").click(function(){
      $("#ModalLetraMenor").remove("slow");    
    });
  });

  $(document).ready(function(){
    $("#imagen4").click(function(){
      $("#ModalLetraMayor").fadeIn("slow");     
    });
  });

  $(document).ready(function(){
    $(".close4").click(function(){
      $("#ModalLetraMayor").remove("slow");    
    });
  });

