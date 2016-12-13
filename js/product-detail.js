$(".wrReview").click(function() { //Muestra caja para escribir una reseña en PD

    $('.elementsFormRvw').toggleClass("active");

}); 


// Muestra wishlist div
$(".heartFavorite").click(function() {

    $(".comunMsgInfo.wishlist").show().delay(3000).hide(0); //Muestra el div y lo oculta pasando 3 segundos

});
// 



// Collapse en version Mobile  
$("h4.titleDsc").click(function() {

    $(this).toggleClass("open");
    $(this).next(".contentOptionClp").toggleClass("openChild");

});
//



//INICIA js ZOOM 

options = { //Ajuste del js CloudZoom para mostrar el zoom 
    zoomPosition: '3', //Coloca el zoom dentro de la imagen 
    disableOnScreenWidth: 300,
    zoomFlyOut: false, //Zoom interno
    zoomOffsetX: 0, //Evita bordes
    tintColor: false
};


//Inicia el zoom con un evento click en la imagen 
$('img.targetChangeImg').click(function() {

    $('.cloudzoom0').CloudZoom(options); //Clase de Imagen para iniciar el zoom
    zeroZoomImg = $('.cloudzoom0').data('CloudZoom');
    countClkImage.push("-"); //Valida que el clic se realizo para las otras funciones

});


var countClkImage = []; //Arreglo para saber si el zoom esta activo 

//Cambia las imagenes de detalle de Producto 
function current_image(changeImg) {

    var re_img = $(changeImg).attr('data-img');

    $('.cloudzoom0').attr("src", "" + re_img + "");
    $('.cloudzoom0').attr("data-cloudzoom", "zoomImage: '" + re_img + "'");

/*
    $('.brdPrdZoom').css("border", "1px solid #b4b4b4"); //Asigna el borde a las imagenes
    $(changeImg).parent().css("border", "2px solid #e86d1e"); // Asigna el borde rojo de la img seleccionada
*/

    $('.brdPrdZoom').removeClass("activeBorder"); //Asigna el borde a las imagenes
    $(changeImg).parent().addClass("activeBorder"); // Asigna el borde rojo de la img seleccionada


    if (countClkImage.length >= 1) {
        zeroZoomImg.destroy(); //destruye el zoom 
        $('.cloudzoom-blank').remove();
    }
}


//Barra lateral izquierda de imagen para terminar el zoom 
$("ul.thumbsImgPd").mouseenter(function() {

    if (countClkImage.length >= 1) {  //Si esta activo el zoom lo destruye
        zeroZoomImg.destroy(); 
        $('.cloudzoom-blank').remove();
    }
});

$("ul.thumbsImgPd").mouseleave(function() {

    if (countClkImage.length >= 1) {
        $('.cloudzoom0').CloudZoom(options); //Imagen 0 para iniciar el zoom
        zeroZoomImg = $('.cloudzoom0').data('CloudZoom');
    }
});
//Barra lateral izquierda de imagen para terminar el zoom 



//Barra lateral derecha de imagen para terminar el zoom 
$("div.hideZoomRight").mouseenter(function() {
    if (countClkImage.length >= 1) {  //Si esta activo el zoom lo destruye
        zeroZoomImg.destroy(); 
        $('.cloudzoom-blank').remove();
    }
});

$("div.hideZoomRight").mouseleave(function() {
    if (countClkImage.length >= 1) { 
        $('.cloudzoom0').CloudZoom(options); //Imagen 0 para iniciar el zoom
        zeroZoomImg = $('.cloudzoom0').data('CloudZoom');
    }

});
//Barra lateral derecha de imagen para terminar el zoom 



$(document).ready(function() {
    $(".brdPrdZoom a").first().trigger("click"); //Activa el zoom por primera vez 
});


//ZOOM 



// FUNCIONALIDAD COLORES TALLA ANCHO MUESTRA SELECCION

$(".imgPrdColor").click(function() {  //COLORES
    $("img.imgPrdColor").removeClass("activeColor"); //Quita la seleccion de color
    var cambioPopColor = $(this).attr("data-imgColor"); //obtiene el atributo data-imgColor para saber a cual asignar la clase activa
    $("img.imgPrdColor." + cambioPopColor).addClass("activeColor");  //Asigna la clase activa al target 
});


$(".numSizeW").click(function() {  //ANCHO 
    $("li.numSizeW").removeClass("activeNumSize"); //Quita la seleccion de color
    var cambioPopColor = $(this).attr("data-numW");  //obtiene el atributo data-imgColor para saber a cual asignar la clase activa
    $("li.numSizeW." + cambioPopColor).addClass("activeNumSize"); //Asigna la clase activa al target 
});


$(".numSizeL").click(function() {  //LARGO 
    $("li.numSizeL").removeClass("activeNumSize"); //Quita la seleccion de color
    var cambioPopColor = $(this).attr("data-numL");  //obtiene el atributo data-imgColor para saber a cual asignar la clase activa
    $("li.numSizeL." + cambioPopColor).addClass("activeNumSize"); //Asigna la clase activa al target 
});
//



// Mensaje de Error si falta seleccionar talla,color,ancho
$(".btnAddPrd").click(function() {

    var waist = "Debes seleccionar";
    var ab = 0;

    if ($(".numSizeL.activeNumSize").length == 0) {   //Si no hay una clase activa 
        ab++;
        waist = waist + " Lenght ,";  //Concatena los mensajes de error
    }

    if ($(".activeColor").length == 0) {
        ab++;
        waist = waist + " Color ,";   //Concatena los mensajes de error
    }

    if ($(".numSizeW.activeNumSize").length == 0) {
        ab++;
        waist = waist + " Width ,";  //Concatena los mensajes de error
    }


    if (ab > 0) {

        waist = waist.slice(0, -1);

        $('.comunMsgInfo.lwc').text(waist);
        $(".comunMsgInfo.lwc").show().delay(3000).hide(0);

    }



    if (ab == 0) {


        $(".bagBox .contMenu").show();


        setTimeout( function(){  //Evita conflictos al tratar de abrir la venta de carrito flotante despues de agregar elemento a carrito
            $(".bagBox .contMenu").attr('style', '')
        }, 3000 );  // Tiempo para cerrar


        /*Muestra mensaje en vista mobile*/
        $(".comunMsgInfo.cartAdd").show().delay(3000).hide(0);
        /*Muestra mensaje en vista mobile*/

    }


});
// FUNCIONALIDAD SELECCION DE talla, color, ancho