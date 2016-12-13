

// Pinta la flecha de seleccion 
   $('.payment-method-option').click(function() {
    
    $(".arrowActive").css("display","none"); 

    $(this).prev(".arrowActive").css("display","block"); 
    
    var targetDivOptions = $(this).attr("data-divShow");

    $(".kitOptionSelected").css("display","none"); 
    $("#"+targetDivOptions+"").css("display","block");  

   }); 
//
 



// Activa la caja de texto de cupon 
   $('.actionShowCupon').click(function() { 

      $(".divCouponInput").toggleClass("active"); 

   }); 



//Marca por defecto la opcion de tarjetas como abierta
$( document ).ready(function() {
    $("#defaultCheckedOption").click(); 
});

