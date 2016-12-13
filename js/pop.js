var modal = document.getElementById('modalFilters'); //
$idDivToShow1 = $("#modalFilters"); // Id del contenedor de la POP 
$idBotonAct1 = $("#activeModalMbFlt");  //Id del boton

$idBotonAct1.click(function() { $idDivToShow1.css("display","block"); });  //Muestra pop
$("span.closePop").click(function() { $idDivToShow1.css("display","none"); });  //Oculta pop


var modal0 = document.getElementById('modalFilters2'); //
$idDivToS1 = $("#modalFilters2"); // Id del contenedor de la POP 
$idBotonAct1 = $("#activeModalMbFlt2");  //Id del boton

$idBotonAct1.click(function() { $idDivToS1.css("display","block"); });
$("span.closePop").click(function() { $idDivToS1.css("display","none"); });


var modal1 = document.getElementById('myModal'); //
$idDivToShow = $("#myModal"); // Id del contenedor de la POP 
$idBotonAct = $("#myBtn");  //Id del boton

$idBotonAct.click(function() { $idDivToShow.css("display","block"); });
$("span.closePop").click(function() { $idDivToShow.css("display","none"); });

 
var modal2 = document.getElementById('modalNewsletter'); //
$idDivToShow2 = $("#modalNewsletter"); // Id del contenedor de la POP 
$idBotonAct = $("#myNewsL");  //Id del boton

$idBotonAct.click(function() { $idDivToShow2.css("display","block"); });
$("span.closePop").click(function() { $idDivToShow2.css("display","none"); });