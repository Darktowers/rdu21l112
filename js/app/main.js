/*requirejs(["js/app/owl.carousel.min.js"]);*/
define(["jquery","owl.carousel.min"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(".menu-movil").on("click",function(){
	$(".ContenedorPrincipal-menu").show("basic");


 











});
    	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true
	});
});
/*
require(['jquery','owl'], function($, owlCarousel){
    $('.carousel').owlCarousel();
});*/
