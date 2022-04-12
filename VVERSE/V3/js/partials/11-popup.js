	/* VIDEO POPUP
	------------------------------------*/
	ckav.videoPopup = function (obj) {
		'use strict';
		$(obj).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};

	/* INLINE POPUP
	------------------------------------*/
	ckav.inlinePopup = function (obj) {
		'use strict';
		$('body').off('click').on('click', obj, function (e) {
			$(this).magnificPopup({
				type: 'inline',
				preloader: false
			}).click();
		});
	}

	/* VIDEO POPPUP WIDGET
	------------------------------------*/
	if ($o.videopop) {
		for (var i = 0; i < $o.videopop.length; i++) {
			ckav.videoPopup($o.videopop[i]);
		}
	}

	/* NORMAL POPUP
	------------------------------------*/
	if ($o.setpop) {
		for (var i = 0; i < $o.setpop.length; i++) {
			$o.setpop[i]

			var pop = $($o.setpop[i]).attr('href');
			$($o.setpop[i]).magnificPopup({
				type: 'inline',
				preloader: false,
				mainClass: 'mfp-fade',
				callbacks: {
					beforeOpen: function () {
						$(pop).removeClass('animate fadeInDown').addClass('animate fadeInDown');
					}
				}
			});
		}
	}

	/* SEARCH POPUP
	------------------------------------*/
	if ($o.searchpop) {
		$('[href="#popup-search"].set-popup').on('mfpOpen', function(e /*, params */) {
			$($o.searchpop).closest('.mfp-container').addClass('popup-search');
		});
	}

	$('.zoom-img').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
	});

	/* SIMPLE POPUP
	------------------------------------*/
	if ($o.popgallerywidget) {
		for (var i = 0; i < $o.popgallerywidget.length; i++) {
			$o.popgallerywidget[i]

			$($o.popgallerywidget[i]).attr("id", 'popgallery' + i).addClass('popgallery' + i);

			$('#popgallery' + i).magnificPopup({
				delegate: '.pop-img',
				type: 'image',
				removalDelay: 300,
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile mfp-fade',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function (item) {
						return item.el.attr('title');
					}
				}
			});
		}
	}
	