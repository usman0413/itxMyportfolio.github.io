$(".menu-toggler").click(function(){
    $(".navbar-nav").toggleClass("active");
});

$(window).scroll(function(){
   if($(this).scrollTop() >0){
    $(".navbar").addClass("scrolled");
   } else {
    $(".navbar").removeClass("scrolled");
   }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    smartSpeed:1000,
})

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({ 
  offset: 120,
  delay: 0,  
  duration: 600, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});