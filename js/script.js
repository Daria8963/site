$( document ).ready(function() {
    $('.menu__icon').click(function(event) {
      $('.menu__icon, .menu__body').toggleClass('active')
    });
});


 $(document).ready(function(){
  $('.slider__body').slick({
    arrows: false,
    bullets: false,
    infinite: false,
    slidesToShow: 1,
     slidesToScroll: 1
  });
  $('.prevArrow').on('click', function() {
  $('.slider__body').slick('slickNext');
	});
  $('.nextArrow').on('click', function() {
  $('.slider__body').slick('slickPrev');
	});
});