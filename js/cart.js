//ACTIVA EL REMOVER PARA QUITAR EL ELEMENTO DEL CARRITO 
    $(".removeFromCart").click(function() {
        $(this).parents(".row.showp").remove();
    });
//