	
	/* SWIPER SLIDERS  
	------------------------------------*/
	ckav.swiper_slider = function (obj) {

		'use strict';

		var config = {
			autoplay: ckav.getvar($(obj).attr('data-autoplay'), false, 'b'),
			speed: ckav.getvar($(obj).attr('data-speed'), 1000, 'n'),
			fullsize: ckav.getvar($(obj).attr('data-fullsize'), false, 'b'),
			slidesPerView: ckav.getvar($(obj).attr('data-slidesPerView'), 3, 'n'),
		}

		if (config.fullsize) {
			ckav.fullwh(obj);
			$(window).resize(function () {
				ckav.fullwh(obj);
			});
		};

		var swiper = new Swiper(obj, {

			direction: 'horizontal',
			touchEventsTarget: 'container',
			speed: config.speed,
			autoplay: config.autoplay,
			effect: 'fade', // 'slide' or 'fade' or 'cube' or 'coverflow'
			parallax: false,
			pagination: {
				el: obj + ' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},
		});
	}

	/* SWIPER GALLERY  
	------------------------------------*/
	ckav.swiper_gallery = function (obj) {
		'use strict';


		var config = {
			autoplay: ckav.getvar($(obj).attr('data-autoplay'), false, 'b'),
		}

		var galleryTop = new Swiper(obj + ' .gallery-top', {
			spaceBetween: 10,
			effect: 'fade',
			
			// NAVIGATION ARROW
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},
		});
		var galleryThumbs = new Swiper(obj + ' .gallery-thumbs', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
			autoplay: config.autoplay
		});

		galleryTop.controller.control = galleryThumbs;
	    galleryThumbs.controller.control = galleryTop;
	    
	}

	/* SWIPER WIDGET  
	------------------------------------*/
	if ($o.swiperwidget) {
		for (var i = 0; i < $o.swiperwidget.length; i++) {

			// SET ID ON ALL OBJECTS
			var swiObj = 'swiper' + i;
			$($o.swiperwidget[i]).css({ opacity: 0 }).attr("id", swiObj).addClass(swiObj);
			ckav.swiper_slider("#" + swiObj);
		}
	}
	
	/* SWIPER GALLERY MODE  
	------------------------------------*/
	if ($o.swipergallery) {
		for (var i = 0; i < $o.swipergallery.length; i++) {
			
			// SET ID ON ALL OBJECTS
			var swiGal = 'swiperGallery' + i;
			$($o.swipergallery[i]).css({ opacity: 0 }).attr("id", swiGal).addClass(swiGal);
			ckav.swiper_gallery("#" + swiGal);
		}
	}