(function() {

	$(document).ready(function() {

		var options = {
			ovalWidth: 400,
			ovalHeight: 50,
			offsetX: 100,
			offsetY: 325,
			angle: 0,
			activeItem: 0,
			duration: 350,
			className: 'item'
		}

		var carousel = $('.carousel').CircularCarousel(options);

		// /* Fires when an item is about to start it's activate animation */
		// carousel.on('itemBeforeActive', function(e, item) {
		// 	$(item).css('box-shadow', '0 0 20px blue');
		// });
    //
		// /* Fires after an item finishes it's activate animation */
		// carousel.on('itemActive', function(e, item) {
		// 	$(item).css('box-shadow', '0 0 20px green');
		// });
    //
		// /* Fires when an active item starts it's de-activate animation */
		// carousel.on('itemBeforeDeactivate', function(e, item) {
		// 	$(item).css('box-shadow', '0 0 20px yellow');
		// })
    //
		// /* Fires after an active item has finished it's de-activate animation */
		// carousel.on('itemAfterDeactivate', function(e, item) {
		// 	$(item).css('box-shadow', '');
		// })


		/* Previous button */
		$('.controls .previous').click(function(e) {
			carousel.cycleActive('previous');
			e.preventDefault();
		});

		/* Next button */
		$('.controls .next').click(function(e) {
			carousel.cycleActive('next');
			e.preventDefault();
		});

		/* Manaully click an item anywhere in the carousel */
		$('.carousel .item').click(function(e) {
			var index = $(this).index('li');
			carousel.cycleActiveTo(index);
			e.preventDefault();
		});

    /*Scroll to #about-div*/
    $('a[href=#about-div]').click(function(e) {
        e.preventDefault();
        console.log('scrolling to about-div');
        $('html, body, .parallax').animate({
            scrollTop:  $("#about-div").position().top
        }, 1000);
    });

    /*Scroll to #portfolio*/
    $('a[href=#portfolio]').click(function(e) {
        e.preventDefault();
        console.log('scrolling to portfolio');
        $('html, body, .parallax').animate({
            scrollTop:  $("#portfolio").position().top
        }, 1000);
    });

    /*Scroll to #contact-div*/
    $('a[href=#contact-div]').click(function(e) {
        e.preventDefault();
        console.log('scrolling to contact-div');
        $('html, body, .parallax').animate({
            scrollTop:  $("#contact-div").position().top
        }, 1000);
    });

	});

})();
