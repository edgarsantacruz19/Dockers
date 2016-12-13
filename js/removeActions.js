

// carrito flotante muestra carrito vacio al remover elementos -Todas las vistas
$("a.lnkRemove").on("click", function() {   

$(this).parents(".row.lineCurv").remove();

var itmInCart = $(".lineCurv.itmCart").length;

if (itmInCart == 0) {  

$(".actBtnCart").hide(); 
$(".orderResumePrc").hide(); 

$('.nOfItems').text("No Items in Your Cart");

}

});
// carrito flotante muestra carrito vacio al remover elementos







// funciones esteticas en -- catalog.php

  $('.btnMoreProd').click(function() { 

  $('.cRow').addClass("active");  //muestra los productos del scroll infinito

  });


  $('.selectedFilterAction li').click(function() { 

  $(this).remove();  //remueve el filtro 

    if($('.selectedFilterAction li').length == 0 ){
    $('.cleanRemove').css('display', 'none');
    }

  });


  $('.cleanRemove').click(function() { 

  $('.selectedFilterAction').remove(); //remueve todos los filtros
  $(this).remove(); // remueve tel texto remove 

  });

// funciones esteticas en -- catalog.php





