'use strict';

$(function () {
	var imgSvgArray = {};

	function imgSvg() {
		$('img.img-svg').each(function () {
			var $svg;
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			if (typeof imgSvgArray[imgURL] !== 'undefined') {
				$svg = $(imgSvgArray[imgURL]);
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}
				$img.replaceWith($svg);
			} else {
				$.ajax({
					url: imgURL,
					async: false,
					dataType: 'xml',
					success: function (data) {
						$svg = $(data).find('svg');

						if (typeof imgID !== 'undefined') {
							$svg = $svg.attr('id', imgID);
						}

						$svg = $svg.removeAttr('xmlns:a');

						if (
							!$svg.attr('viewBox') &&
							$svg.attr('height') &&
							$svg.attr('width')
						) {
							$svg.attr(
								'viewBox',
								'0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width')
							);
						}

						imgSvgArray[imgURL] = $svg[0].outerHTML;

						if (typeof imgClass !== 'undefined') {
							$svg = $svg.attr('class', imgClass + ' replaced-svg');
						}

						$img.replaceWith($svg);
					}
				});
			}
		});
	}

	imgSvg();

	$('body').on('DOMNodeInserted', function () {
		imgSvg();
	});

	// Настройка вспомогательных переменных
	function updateDeviceProps() {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');

		var root = document.querySelector('body');
		var scrollWidth = window.innerWidth - root.clientWidth;
		document.documentElement.style.setProperty(
			'--scroll-width',
			scrollWidth + 'px'
		);
	}
	window.addEventListener('resize', updateDeviceProps);
	updateDeviceProps();

	/* Инпут с плюсом и минусом */
	$('.counter').each(function (idx, counter) {
		var $minus = $(counter).children('.counter__minus');
		var $plus = $(counter).children('.counter__plus');
		var $input = $(counter).children('.counter__field');
		var min = $input.attr('min');
		var max = $input.attr('max');

		$minus.on('click', function () {
			if (!min || $input.val() > min) $input.val(+$input.val() - 1);
		});

		$plus.on('click', function () {
			if (!max || $input.val() < max) $input.val(+$input.val() + 1);
		});
	});

	/* Обработка форм (отключение возможности отправки при неактивном инпуте) */
	$('form').each(function (id, form) {
		var $checkboxes = $(form).find('input[type="checkbox"]');
		var $submit = $(form).find('button[type="submit"]');
		var $politconf;
		$checkboxes.each(function (checkId, checkbox) {
			if (checkbox.id.toLowerCase().indexOf('politconf') !== -1) {
				$politconf = $(checkbox);
			}
		});

		if ($politconf && $politconf.length && $submit && $submit.length) {
			$submit.attr('disabled', !$politconf[0].checked);
			$politconf.on('change', function () {
				$submit.attr('disabled', !$politconf[0].checked);
			});
		}
	});
});
