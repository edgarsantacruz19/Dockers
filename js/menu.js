
// Abre el menu dockers opciones en version MB
$(".evMenuShowIcon ").click(function() {

console.log("menu"); 
$("nav.topNavigation").toggleClass("openMenu");

});


$("ul.menuLvs p.firstTextOption").click(function() {

var ifIsOpen = $(this).attr('class');
var findVal = ifIsOpen.search('open');


if (findVal == -1) {
$(".firstTextOption").removeClass("open");
$(".contMenu").removeClass("openChild");

$(this).addClass("open");
$(this).next(".contMenu").addClass("openChild");  

}

else {

 $(".firstTextOption").removeClass("open");
 $(".contMenu").removeClass("openChild");
}


});



$("p.lastTextOption").click(function() {  

var ifIsOpen = $(this).attr('class');
var findVal = ifIsOpen.search('open');

if (findVal == -1){
 
 $(".lastTextOption").removeClass("open");
 $(".lastLevel").removeClass("openChild");

 $(this).addClass("open");
 $(this).next(".lastLevel").addClass("openChild");

}else {

 $(".lastTextOption").removeClass("open");
 $(".lastLevel").removeClass("openChild");
}

});

// JS versión mobile 



// Abre tercera opcion
$(".iconboxSearchMb").click(function() {  

$(".searchMbFrm ").toggleClass("active");  

});





