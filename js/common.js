$(document).ready(function () {
  new WOW().init();
  $('.header-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.header-arrow__left'),
    nextArrow: $('.header-arrow__next'),
   });
  
})