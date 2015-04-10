var coleccion = require('./collections/radioCollection');
var vista = require('./views/radiosView');
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 64) {
        $(".side").addClass("fixed");
    }
    if (scroll <= 64) {
        $(".side").removeClass("fixed");
    }
});
/*
$('.menu span').click(function(){
	$('.menu span').removeClass('active');
	$(this).addClass('active');
})

$('.views i').click(function(){
	$('.views i').removeClass('view-active');
	$(this).addClass('view-active');
})
$('.nav li').click(function(){
	$('ul li').removeClass('nav-active');
	$(this).addClass('nav-active');
	return false;
})


$('.mosaic').click(function(){
	alert("nada");
})*/