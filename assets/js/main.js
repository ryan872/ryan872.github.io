/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
			$window.load(function() {

				var x = parseInt($('.wrapper').first().css('padding-top')) - 15;

				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});

			});

	});

})(jQuery);

$(document).ready(function() {
	
    let pathname = $(location).attr(`href`);

	if (pathname.search(`github`) != -1)
    	$(`.contact-form`).hide();
	else $(`.contact-link`).hide();

	$("#contact-form").on("submit", function(e) {
		$.ajax({
			method: "POST",
			url: "/",
			data: $( "#contact-form" ).serialize(),
			success: function(success) {
				alert(`Success: ${success.message}` );
			},
			statusCode: {
				500: function() {
					alert(`Error: There was some problem sending message. Please email to priyank.vasa5@gmail.com` );
				}
			}
		});
		e.preventDefault(); // avoid to execute the actual submit of the form.
	});
});