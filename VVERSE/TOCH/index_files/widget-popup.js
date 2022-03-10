(
	function( $ ) {
		'use strict';

		var SalaPopupVideoHandler = function( $scope, $ ) {

			$( '.video-link' ).on( 'click', function(e) {
				e.preventDefault();

				$( this ).parent().find( '.popup-bg' ).fadeIn();
				$( this ).parent().find( '.popup-content' ).fadeIn();
				$( 'body' ).addClass( 'open-popup' );
			});

			$( '.popup-bg' ).on( 'click', function(e) {
				e.preventDefault();
				$('iframe').each(function(index) {
					$(this).attr('src', $(this).attr('src'));
					return false;
				});
				$( this ).fadeOut();
				$( this ).parent().find( '.popup-content' ).fadeOut();
				$( 'body' ).removeClass( 'open-popup' );
			});

		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/sala-popup-video.default', SalaPopupVideoHandler );
		} );
	}
)( jQuery );
