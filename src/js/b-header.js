'use strict';

$(document).ready(function() {
	// Выпадающее меню
	$('.header__dropdown-menu')
		.switchPopup({
			btnClass: 'js-tgl-dropdown-menu',
			displayClass: 'header__dropdown-menu_display',
			visibleClass: 'header__dropdown-menu_visible',
			duration: 0
			// pageScrollClass: ''
		});
	$('.header__dropdown-menu').on('beforeOpen', function() {
		$('.burger').addClass('burger_close');
		$('.header__close-button').addClass('header__close-button_open');
	});
	$('.header__dropdown-menu').on('beforeClose', function() {
		$('.burger').removeClass('burger_close');
		$('.header__close-button').removeClass('header__close-button_open');
	});
	// Открытие формы поиска
	$('.header__search-form-wrap')
		.switchPopup({
			btnClass: 'js-tgl-header-search',
			displayClass: 'header__search-form-wrap_display',
			visibleClass: 'header__search-form-wrap_visible',
			duration: 0
		});
});
