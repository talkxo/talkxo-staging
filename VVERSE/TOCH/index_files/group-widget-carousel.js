(
	function( $ ) {
		'use strict';

		var SwiperHandler = function( $scope, $ ) {
			var $element = $scope.find( '.sala-slider-widget' );

			$element.SalaSwiper();
		};

		var SwiperLinkedHandler = function( $scope, $ ) {
			var $element = $scope.find( '.sala-slider-widget' );

			if ( $scope.hasClass( 'sala-swiper-linked-yes' ) ) {
				var thumbsSlider = $element.filter( '.sala-thumbs-swiper' ).SalaSwiper();
				var mainSlider = $element.filter( '.sala-main-swiper' ).SalaSwiper( {
					thumbs: {
						swiper: thumbsSlider
					}
				} );
			} else {
				$element.SalaSwiper();
			}
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-image-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-modern-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-modern-slider.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-team-member-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-product-carousel.default', SwiperHandler );

			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-testimonial.default', SwiperLinkedHandler );
		} );
	}
)( jQuery );
