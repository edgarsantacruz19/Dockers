	$(".optionTextHelp h4").click(function(){ 
			$(this).next(".contenttoHideFirst").toggleClass("active");
			$(this).parent(".optionTextHelp").toggleClass("active");
	});