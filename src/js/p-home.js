'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.slider-banner').slick({
		dots: true
	});
	$('.slider-products').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: 'unslick' // destroys slick
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					infinite: true
				}
			}
		]
	});
	$('.slider-facts').slick({
		dots: false
	});
	$('.slider-insta').slick({
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 10000,
				settings: {
					slidesToShow: 2,
					infinite: true
				}
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					infinite: true
				}
			}
		]
	});
	// Галочка о согласии на обработку персональных данных.
	$('#toggle-feedback-button').click(function() {
		$('#send-feedback-button').attr('disabled', function(index, attr) {
			return !attr;
		});
	});
	// Скрипты для работы формы обратной связи
	$('.feedback__form').submit(function(e) {
		e.preventDefault();
		$('.feedback-modal').addClass('feedback-modal_display');
		$('.feedback-modal').addClass('feedback-modal_visible');
	});
	$('.feedback-modal')
		.switchPopup({
			btnClass: 'js-tgl-feedback-modal',
			displayClass: 'feedback-modal_display',
			visibleClass: 'feedback-modal_visible',
			duration: 0
		});
});
