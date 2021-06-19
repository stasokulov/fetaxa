'use strict';

$(document).ready(function() {
	$('.recipe-photo__slider').slick({
		dots: false
	});

	// Перемножение количества ингредиентов на количество порций
	$('.ingredients__counter').click(function() {
		var counter = $(this).children('.counter__field').val();
		$('.ingredients__row [data-quantity]').each(function() {
			var quantity = $(this).attr('data-quantity');
			$(this).html(quantity * counter);
		});
	});
});
