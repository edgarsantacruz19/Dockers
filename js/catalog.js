
//Marca como seleccion en filtros de catalogo 
  $(".childFilterOpc li").click(function() { 
          
          $(this).children("span.checkB").toggleClass("active"); //Lo marca como seleccionado

     });
//

//Collapse de filtros puede ser utilizado en varias vistas
  $(".optionTextClpFirst h4").click(function() {   //JS para version mobile de Filtros
         
          $(this).next(".contenttoHideFirst").toggleClass("active");
          $(this).parent(".optionTextClpFirst").toggleClass("active");

     });
//
