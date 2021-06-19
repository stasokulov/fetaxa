'use strict';

$(document).ready(function() {
	$('.recipes-slider').slick({
		dots: true
	});
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

	// Отправка данных фильтра (dataLayer.push)
	function dataLayerPush() {
		function pushData() {
			var selects = document.querySelectorAll('.recipes-dashboard__select');
			var selectsArray = Array.from(selects);
			var valueArray = [];
			selectsArray.forEach(function(item) {
				valueArray.push(item.options[item.selectedIndex].text);
			});
			var label;
			valueArray.forEach(function(item, index) {
				if (index === 0) {
					label = item;
				} else {
					label = label + '|' + item;
				}
			});
			dataLayer.push({
				event: 'show_recipe_button',
				label: label
			});
		}
		var button = document.querySelector('.recipes-dashboard__submit');
		button.addEventListener('click', pushData);
	}
	dataLayerPush();
});
