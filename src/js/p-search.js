'use strict';

$(document).ready(function() {
	// Выпадающее меню
	$('.recipes-dashboard__multiselect-dropdown_add')
		.switchPopup({
			btnClass: 'js-tgl-dropdown-ingredients-add',
			displayClass: 'recipes-dashboard__multiselect-dropdown_display',
			visibleClass: 'recipes-dashboard__multiselect-dropdown_visible',
			duration: 0,
			pageScrollClass: 'recipes-dashboard__multiselect-dropdown'
		});
	$('.recipes-dashboard__multiselect-dropdown_exclude')
		.switchPopup({
			btnClass: 'js-tgl-dropdown-ingredients-exclude',
			displayClass: 'recipes-dashboard__multiselect-dropdown_display',
			visibleClass: 'recipes-dashboard__multiselect-dropdown_visible',
			duration: 0,
			pageScrollClass: 'recipes-dashboard__multiselect-dropdown'
		});
	$('body').click(function() {
		$('.recipes-dashboard__multiselect-dropdown_add').switchPopup('close');
		$('.recipes-dashboard__multiselect-dropdown_exclude').switchPopup('close');
	}); // Закрытие выпадающего меню при клике мимо него.
	$('.recipes-dashboard__form-wrap')
		.switchPopup({
			btnClass: 'js-tgl-dashboard',
			displayClass: 'recipes-dashboard__form-wrap_display',
			visibleClass: 'recipes-dashboard__form-wrap_visible',
			duration: 0
		});
});
