/*requirejs(["js/app/owl.carousel.min.js"]);*/
define(["jquery","owl.carousel.min"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(".menu-movil").on("click",function(){
	$(".ContenedorPrincipal-menu").show("basic");
});
    	var owl = $('#owl-demo');
	owl.owlCarousel({
		 	animateOut: 'slideOutDown',
    		animateIn: 'flipInX',
	    	autoplay:true,
            items : 1,
            autoplayTimeout:3000,
            loop:true,
            nav: false,
            center:true,
            dots:false,
            itemsDesktop : [1199,2],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1], //2 items between 600 and 0
            navigation : false,
            pagination : false,
            slideSpeed : 50000
	});
	var owl1 = $('#owl-demo-1');
	owl1.owlCarousel({
	    	animateOut: 'fadeOut',
		  	items:1,
		    margin:30,
		    loop:true,
		    stagePadding:30,
		    smartSpeed:450,
		    autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true

	});
		var owl2 = $('#owl-demo-s');
	owl2.owlCarousel({
	    	
		  	items:1,
		    margin:30,
		    loop:true,
		    stagePadding:30,
		    smartSpeed:450,
		    autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true

	});
});
/*
require(['jquery','owl'], function($, owlCarousel){
    $('.carousel').owlCarousel();
});*/
