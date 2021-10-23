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
  $('.menu-img').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
    $('.dark-window').addClass('dark-window-active');
  })
  $('.modal-menu-list__item_close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })
  $('.services__btn').on('click', function() {
    $('.modal-form').addClass('modal-form-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('.modal-form').removeClass('modal-form-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })

})