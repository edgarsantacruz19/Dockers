
 
//funcion para selects de cantidad  product_detail.php

  $(".boxSelectStyle").click(function(){ 
    
   $(this).toggleClass("active");
   $(this).children('ul.listNumbersUl').toggleClass("active"); //Activa y muestra las opciones de la lista
   $(this).children('p.showSelection').toggleClass("active");//Activa y muestra las opciones del texto

   });

//


// funcion para selects de cantidad  

  $(".listNumbersUl li").click(function(){

   var divAsignValue =  $(this).attr("data-asign"); //Obtiene el valor
   var numberToShowVl = $(this).text(); //Obtiene el texto estetico a mostrar
   
   $("."+divAsignValue+"").text(numberToShowVl); //Asigna el texto
   $("#"+divAsignValue+"").val(numberToShowVl);  //Coloca el valor en un input para mayor control
  
   }); 

//
