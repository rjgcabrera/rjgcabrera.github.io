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

    var aboutDivPos = $("#about-div").position().top;
    var portfolioDivPos = $("#portfolio").position().top;
    var contactDivPos = $("#contact-div").position().top;
    var $aboutNavLink = $('a[href=#about-div]');
    var $portfolioNavLink = $('a[href=#portfolio]');
    var $contactNavLink = $('a[href=#contact-div]');


    /*Scroll to #about-div*/
    $aboutNavLink.click(function(e) {
        e.preventDefault();
        // console.log('scrolling to about-div');
        $('html, body, .parallax').animate({
            scrollTop: aboutDivPos
        }, 1000);
    });

    /*Scroll to #portfolio*/
    $portfolioNavLink.click(function(e) {
        e.preventDefault();
        // console.log('scrolling to portfolio');
        $('html, body, .parallax').animate({
            scrollTop: portfolioDivPos
        }, 1000);
    });

    /*Scroll to #contact-div*/
    $contactNavLink.click(function(e) {
        e.preventDefault();
        // console.log('scrolling to contact-div');
        $('html, body, .parallax').animate({
            scrollTop: contactDivPos
        }, 1000);
    });

    /*Highlight nav link when client is viewing div*/
    var parallax = document.querySelector('.parallax');

    parallax.addEventListener('scroll', () => {
      if (parallax.scrollHeight - parallax.scrollTop === parallax.clientHeight) {
        $aboutNavLink.removeClass('selected');
        $portfolioNavLink.removeClass('selected');
        $contactNavLink.addClass('selected');
      } else if (parallax.scrollTop >= aboutDivPos && parallax.scrollTop < portfolioDivPos) {
        $aboutNavLink.addClass('selected');
        $portfolioNavLink.removeClass('selected');
        $contactNavLink.removeClass('selected');
      } else if (parallax.scrollTop >= portfolioDivPos && parallax.scrollTop < contactDivPos) {
        $aboutNavLink.removeClass('selected');
        $portfolioNavLink.addClass('selected');
        $contactNavLink.removeClass('selected');
      } else if (parallax.scrollTop < aboutDivPos) {
        $aboutNavLink.removeClass('selected');
        $portfolioNavLink.removeClass('selected');
        $contactNavLink.removeClass('selected');
      }

    });
	});

})();
