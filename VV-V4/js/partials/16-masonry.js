	/* MASONRY BANNER GRIDS  
	------------------------------------*/
	if ($o.masonry) {
		$($o.masonry).each(function(index, el) {

			var masonry_wrp = $(this).closest('.masonry-wrp');
			
			masonry_wrp.css({
				opacity: 0,
			});

			var $mGrid = $(this).imagesLoaded()
			.always( function( instance ) {
				//console.log('all images loaded');
			})
			.done( function( instance ) {
				//console.log('all images loaded');
			})
			.fail( function() {
				//console.log('all images loaded, at least one is broken');
			})
			.progress( function( instance, image ) {
				
			});

			masonry_wrp.animate({
				opacity: 1},
				600, function() {
				$mGrid.isotope({
					itemSelector: '.masonry-item',
					percentPosition: true,
					stagger: 30,
					layoutMode: 'packery',
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					}
				});
			});

			

			$(masonry_wrp).on('click', '.filters [data-filter]', function(event) {
				event.preventDefault();
				
				$(masonry_wrp).find('.filters [data-filter]').removeClass('active');
				$(this).addClass('active');

				var filterValue = $(this).attr('data-filter');
				// use filterFn if matches value
				$mGrid.isotope({ filter: filterValue });
			});
		});
		
	}