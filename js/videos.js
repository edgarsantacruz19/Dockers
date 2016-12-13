
    $(document).ready(function() {
        $(".eventVideoShow").first().trigger("click");
    });


    $(".eventVideoShow").click(function() {

        var cambioSY = $(this).attr("data-target");
        $(".videoTargertChange").css("display", "none");

        $(".videoTargertChange." + cambioSY).css("display", "block");

    });



    $(".shadowVid").click(function() {

        var cambioSY = $(this).attr("data-target"); //Se obtiene el video de Youtube
        $(".vidToShow").css("display", "none");

        $(".vidToShow." + cambioSY).css("display", "block");

    });



//Inician los slides por separado para tener mayor control 
    var swiper = new Swiper('.oneSlideVideo', { //Pueden ser encontrados por el nombre de la clase en el HTML

       pagination: '.swiper-pagination',
       paginationClickable: true,
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       autoplay: 4500,
       spaceBetween: 30,
       centeredSlides: true,
       

    });


    var swiper = new Swiper('.twoSlideVideo', { 

       pagination: '.swiper-pagination',
       paginationClickable: true,
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       autoplay: 2500,
       spaceBetween: 30,
       centeredSlides: true,
       

    });



    var swiper = new Swiper('.thirdHomeSlide', { 

       pagination: '.swiper-pagination',
       paginationClickable: true,
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       autoplay: 2500,
       spaceBetween: 30,
       centeredSlides: true,
       

    });

//Terminan slides 
