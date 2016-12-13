
// Pinta de negro la opciones seleccionada en el momento pero hay una clase "active"
  $(".topNavAccount li").click(function() { 
         
    $(".topNavAccount li").removeClass("active"); //Agrega la clase activo que es negro 
    $(this).addClass("active");

   });
// 
