$(document).ready(function () {
  new WOW().init();
  $('.header-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.header-arrow__left'),
    nextArrow: $('.header-arrow__right'),
  });
})