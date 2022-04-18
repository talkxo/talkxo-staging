/**
***************************************************************
* AUTHOR : CKavArt
* PROJECT : Thron - Creative One Page Template
* Purchase : https://themeforest.net/user/c-kav 
*
* Copyright 2019-2020 CKavArt
* NOTE : This file licensed to CKavArt - https://themeforest.net/user/c-kav and it is strictly prohibited to copy or reuse it.
***************************************************************
*/
/**
*****************************************************************
* This file is licensed to CKavArt.
* It's not allowed to copy or reuse it Copyright CKavArt 2017-2018
* CKavArt : http://ckavart.com/
*****************************************************************
*/

; (function () {
	'use strict';

	var ckav = {},
		package_ver = 'v1.1',
		$document = $(document),
		$window = $(window),
		$html = $("html"),
		pageLoader = $('.page-loader'),

		userAgent = navigator.userAgent.toLowerCase(),
	  	isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
	  	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  	window.ckav = ckav;

	/* FORM CONFIGURE  
	------------------------------------*/
	ckav.config = {
		/*
		TWITTER
		String: consumer key. make sure to have your app read-only
		String: consumer secret key. make sure to have your app read-only
		*********************/
		twitter: {
			consumer_key: 'YOUR_CONSUMER_KEY',
			consumer_secret: 'YOUR_CONSUMER_SECRET_KEY'
		},

		/*
		URL OF SUCCESS PAGE ON FORM SUBMIT
		*********************/
		success_url: "thankyou.html"
	}

	/* PAGE LOADER
	------------------------------------*/
	if ($('#pageloader').length > 0) {
		$window.on('load', function () {
			$('#pageloader').fadeOut('slow');
			$window.trigger("resize");
		});
	} else {
		$('#pageloader').remove();
	};

	ckav.dmod = false;
	ckav.demo = function () { if (ckav.dmod) { return ckavNotice(); } else { return true; }; }

	$(function () {


	var $o = {};
	$o.r                = !ckav.demo ? false : ckav.demo();
	$o.tooltip          = $o.r ? $('[data-toggle="tooltip"]') : false;
	$o.pageLoader       = $('#pageloader').length > 0 && $o.r ? $("#pageloader") : false;
	$o.header           = $('.main-head').length > 0 && $o.r ? $('.main-head') : false;
	$o.menuwrp          = $('.menu-wrp').length > 0 && $o.r ? $('.menu-wrp') : false;
	$o.navlink          = $('.menu-wrp').find(".menu-item").length > 0 && $o.r ? $('.menu-wrp').find(".menu-item") : false;
	$o.fullwh           = $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : false;
	$o.fullh            = $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : false;
	$o.bgimg            = $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : false;
	$o.slidebg          = $("[data-slide-bg]").length > 0 && $o.r ? $("[data-slide-bg]") : false;
	$o.section       	= $('#page > section').length > 0 && $o.r ? $("#page > section") : false;
	$o.hoverclass       = $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : false;
	$o.bgcolor          = $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : false;
	$o.txtcolor         = $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : false;
	$o.gradient         = $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : false;
	$o.rgradient        = $("[data-rgradient]").length > 0 && $o.r ? $("[data-rgradient]") : false;
	$o.videopop         = $(".video-popup").length > 0 && $o.r ? $(".video-popup") : false;
	$o.setpop           = $(".set-popup").length > 0 && $o.r ? $(".set-popup") : false;
	$o.countbox         = $(".count-box").length > 0 && $o.r ? $(".count-box") : false;
	$o.tabwidget        = $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : false;
	$o.tabsauto         = $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : false;
	$o.carouselwidget   = $(".carousel-widget").length > 0 && $o.r ? $(".carousel-widget") : false;
	$o.accordionwidget  = $(".accordion-widget").length > 0 && $o.r ? $(".accordion-widget") : false;
	$o.swiperwidget     = $(".swiper-widget").length > 0 && $o.r ? $(".swiper-widget") : false;
	$o.swipergallery    = $(".swiper-gallery").length > 0 && $o.r ? $(".swiper-gallery") : false;
	$o.videobg          = $(".videobg").length > 0 && $o.r ? $(".videobg") : false;
	$o.videwidget       = $(".vide-widget").length > 0 && $o.r ? $(".vide-widget") : false;
	$o.othersection1    = $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : false;
	$o.popgallerywidget = $(".popgallery-widget").length > 0 && $o.r ? $(".popgallery-widget") : false;
	$o.bgslider         = $("[data-bgslider]").length > 0 && $o.r ? $("[data-bgslider]") : false;
	$o.countdownwidget  = $(".countdown-widget").length > 0 && $o.r ? $(".countdown-widget") : false;
	$o.filterwidget     = $(".filter-widget").length > 0 && $o.r ? $(".filter-widget") : false;
	$o.gmapwidget       = $(".gmap-widget").length > 0 && $o.r ? $(".gmap-widget") : false;
	$o.socialsection    = $(".social-section").length > 0 && $o.r ? $(".social-section") : false;
	$o.instagramwidget  = $(".instagram-widget").length > 0 && $o.r ? $(".instagram-widget") : false;
	$o.twitterwidget    = $(".twitter-widget").length > 0 && $o.r ? $(".twitter-widget") : false;
	$o.formwidget       = $(".form-widget").length > 0 && $o.r ? $(".form-widget") : false;
	$o.jparallax        = $("[data-jparallax='y']").length > 0 && $o.r ? $("[data-jparallax='y']") : false;
	//$o.stellar          = $("[data-stellar]").length > 0 && $o.r ? $("[data-stellar]") : false;
	//$o.parallax         = $("[data-parallax-img]").length > 0 && $o.r ? $("[data-parallax-img]") : false;
	$o.elanimate        = $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : false;
	$o.bLazy            = $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : false;
	$o.masonry 			= $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;

	$o.styleid          = $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : false;
	$o.searchpop        = $("#popup-search").length > 0 && $o.r ? $("#popup-search") : false;
	$o.menuicon        	= $(".menu-icon").length > 0 && $o.r ? $(".menu-icon") : false;
	$o.pages        	= $(".scrollwrapper").length > 0 && $o.r ? $(".scrollwrapper") : false;
	$o.scrollsticky     = $("[data-scrollsticky='y']").length > 0 && $o.r ? $("[data-scrollsticky='y']") : false;

	ckav.bgimg = function(obj) {
		$(obj).css({ backgroundImage: "url(" + $(obj).attr("data-bg") + ")" });
	}
	
	if ($o.r) {


		
		$('html').before('<!-- ' + package_ver + ' -->');

		$(".copyright-year").text(new Date().getFullYear());

		
	/* RESPONSIVE
	------------------------------------*/
	enquire.register("screen and (min-width: 992px)", {
		match : function() {
			ckav.device = 'd';
		},  
		unmatch : function() {}
	}).register("(min-width: 200px) and (max-width: 991px)", {
		match : function() {
			ckav.device = 'm';
		},  
		unmatch : function() {}
	});
	/* FUNCTION CHECK 
	------------------------------------*/
	ckav.elcheck = function (el) {
		'use strict';
		if ($(el).length > 0) {
			return true;
		} else {
			return false;
		};
	}

	/* UNIQUE ID
	------------------------------------*/
	ckav.uid = function () {
		'use strict';
		var uid = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 3; i++)
			uid += possible.charAt(Math.floor(Math.random() * possible.length));
		return 'ckav' + uid;
	}

	ckav.setId = function (obj, prefix, n) {
		'use strict';

		n++;
		var a = prefix + n;
		$(obj).css({ opacity: 0 });
		$(obj).attr("id", a);
		$(obj).addClass(a);

		// Accordion setup
		if ($(obj).is(".accordion-widget")) {
			$(obj).find(".acc-block").each(function (index, el) {
				var id = a + "-acc-block-" + index;
				$(this).find(".acc-hd").attr("data-accid", "#" + id);
				$(this).find(".acc-content").attr("id", id);
				$(this).find(".acc-hd").append('<i class="acc-open ' + $(obj).attr("data-acc-openclass") + ' "></i><i class="acc-close ' + $(obj).attr("data-acc-closeclass") + '"></i>');
			});
		}
	}

	ckav.getMultiScripts = function (arr, path) {
		'use strict';

		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr);
		});

		_arr.push($.Deferred(function (deferred) {
			$(deferred.resolve);
		}));

		return $.when.apply($, _arr);
	}

	ckav.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
	}

	/* FULL HEIGHT AND WIDTH
	------------------------------------*/
	ckav.fullwh = function (obj) {
		'use strict';
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		$(obj).css({
			'width': winWidth,
			'height': winHeight,
		});
	}

	/* FULL HEIGHT
	------------------------------------*/
	ckav.fullh = function (obj, wrp) {
		'use strict';
		if (wrp) {
			var winHeight = $(obj).closest(wrp).height();
		} else {
			var winHeight = $(window).height();
		}
		$(obj).css({
			'height': winHeight,
		});
	}


	/* MOBILE MENU  
	------------------------------------*/
	ckav.mobmenu = function (el) {
		'use strict';
		
		$(el).on("click", function (e) {
			var nav = $(this).attr('data-nav');
			var c = $(this).attr('data-navclose');
			var o = $(this).attr('data-navopen');
			if ($(nav).hasClass('open')) {
				$(nav).removeClass('open');
				$(this).find('i').removeClass(c).addClass(o);
			} else {
				$(nav).addClass('open m-nav');
				$(this).find('i').removeClass(o).addClass(c);
			};
		});

	}
	/* MENU HEIGHT
	------------------------------------*/
	ckav.menuH = function (header, menu) {
		'use strict';
		$(menu).removeAttr('style');
		$(menu).css({
			minHeight: $(header).height()
		});
	}

	/* MENU FUNCTION
	------------------------------------*/
	ckav.menuFn = function ($menu) {
		'use strict';
		var mEnter = 'mouseenter',
			mLeave = 'mouseleave';	
		$menu.on(mEnter, '.has-dropdown', function(event) {
			$(this).addClass('active');
		});
		$menu.on(mLeave, '.has-dropdown', function(event) {
			$(this).removeClass('active');
			$(this).children('.sub').removeAttr('style');
		});
		$menu.on(mEnter, '.menu-item', function(event) {
			event.preventDefault();
			if($(this).children('.sub').length != 0){
				$(this).children('.sub').removeAttr('style');

				var submenu = $(this).children('.sub'),
					dropdown = $(submenu).offset(),
					l_offset_from_container = dropdown.left - (($(window).width()-$('.main-head > .container').width())/2),
					overflow_menu_w = l_offset_from_container + $(submenu).outerWidth() - $('.main-head > .container').width();
				
				if (overflow_menu_w > 0) {
					$(submenu).css({
						marginLeft: '-' + overflow_menu_w + 'px',
					});
				}
			}
		});
	}

	/* HEADER FUNCTIONS
	------------------------------------*/
	ckav.headerFn = function ($header) {
		
		if ($header.attr('data-sticky') == 'y') {
			// CHECK DATA STICKY MENU
			$('html').addClass('data-sticky');

			$header.addClass('fixed-top').removeClass('show-above');

			if ($(window).scrollTop() > $header.height()) {
				$header.addClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.removeClass('bg-glass') : null;
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.addClass('bg-glass') : null;
				ckav.menuH($header, $header.find('.menu'));
			}
		};

		if ($header.attr('data-sticky-scroll') == 'y') {
			if ($(window).scrollTop() > $header.height()) {
				$header.addClass('fixed-top').addClass("header-sticky");
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass('fixed-top').removeClass("header-sticky");
				ckav.menuH($header, $header.find('.menu'));
			}
		}

		if ($header.attr('data-hide') == 'y' && ckav.device == 'd') {
			
			$header.addClass('header-hide');

			if ($(window).scrollTop() > $header.height()) {
				$header.addClass("header-show");
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-show");
				ckav.menuH($header, $header.find('.menu'));
			}
		};
	}


	/* LINK SCROLL
	------------------------------------*/
	ckav.linkscroll = function (obj) {
		'use strict';
		$(document).on('click', obj, function (e) {
			e.preventDefault();
			if ($(this).closest('.nav-links').hasClass('nav-links') == false && $(this).attr('href').indexOf("popup") === -1) {
				
				// TARGET ELEMENT ID
				var id = $(this).attr('href');
				
				// TARGET ELEMENT
				var $id = $(id);
				if ($id.length === 0) { return; }
				
				// TOP POSITION RELATIVE TO THE DOCUMENT
				var pos = $(id).offset().top;
				
				// ANIMATED TOP SCROLLING
				$('body, html').animate({ scrollTop: pos }, 1200);
			};
		});
	}

	/* NAVIGATION
	------------------------------------*/
	if ($o.navlink) {
		$o.navlink.find('a').smoothScroll({
			speed: 1200,
			beforeScroll: function () {
				$o.navlink.find('a').removeClass('active');
				$('.nav-handle').trigger('tap');
			},
			afterScroll: function () {
				$(this).addClass('active');
			}
		});
	};

	/* LINK SCROLL
	********************************************/
	if (ckav.elcheck("#page[data-linkscroll='y']")) {
		ckav.linkscroll('a[href^="#"]:not(.nav-links)');
	};

	/* HEADER UTILITIES DROPDOWN
	------------------------------------*/
	if ($o.menuwrp) {
		var $menu = $('.menu');
		$('.menu .has-dropdown').each(function() {
			$(this).prepend('<b class="sub-handler fa fa-plus">');
			if ($(this).hasClass('menu-item')) {
				$(this).children('ul').addClass('sub');
				$(this).children('.mega-menu').addClass('sub');
			}
		});
	}

	/* HEADER UTILITIES HIDE & GLASS
	------------------------------------*/
	if ($o.header) {
		$o.header.attr('data-glass') === 'y' ? $o.header.addClass('bg-glass') : null;
		$o.header.attr('data-above') === 'y' ? $o.header.addClass('show-above') : null;
		ckav.menuH($o.header, $o.header.find('.menu'));
		if ($o.header.attr('data-sticky') == 'y' || $o.header.attr('data-sticky-scroll') == 'y' || $o.header.attr('data-hide') == 'y' && ckav.device == 'd') {
			$(window).scroll(function () {
				ckav.headerFn($o.header);
			});
			ckav.headerFn($o.header);
		}
	}
	/* CAROUSEL ITEMS  
	------------------------------------*/
	ckav.owlitems = function (arr) {
		'use strict';
		if (typeof (arr) == "string" && arr != 'false') {
			var t1 = arr.split('|');
			var t2 = {};
			$.each(t1, function (index, val) {
				var str = val;
				var newarr = str.split(',');
				t2[newarr[0]] = {}
				t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
			});
			return t2;
		} else if (arr === 'false') {
			return {};
		} else {
			return false;
		}
	}

	/* CAROUSEL VAR  
	------------------------------------*/
	ckav.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
	}

	/* CAROUSEL ATTRIBUTE   
	------------------------------------*/
	ckav.slider = function (owlObj) {

		'use strict';

		var resObj = {
			0: { items: 1 },
			420: { items: 2 },
			600: { items: 3 },
			768: { items: 3 },
			980: { items: 4 }
		}

		var owlEle = $(owlObj + ' .owl-carousel'),
			o = $(owlObj);

		var config = {
			center: ckav.getvar(o.attr('data-center'), false, 'b'),
			stagePadding: ckav.getvar(o.attr('data-stpd'), 0, 'n'),
			items: ckav.getvar(o.attr('data-items'), 5, 'n'),
			margin: ckav.getvar(o.attr('data-margin'), 0, 'n'),
			nav: ckav.getvar(o.attr('data-nav'), false, 'b'),
			dots: ckav.getvar(o.attr('data-pager'), false, 'b'),
			slideby: ckav.getvar(o.attr('data-slideby'), 1, 'n'),
			rbase: ckav.getvar(o.attr('data-rbase'), o.parent(), 's'),
			res: o.attr('data-itemrange') ? ckav.owlitems(o.attr('data-itemrange')) : resObj,
			animOut: ckav.getvar(o.attr('data-out'), 'fadeOut', 's'),
			animIn: ckav.getvar(o.attr('data-in'), 'fadeIn', 's'),
			autoplay: ckav.getvar(o.attr('data-autoplay'), false, 'b'),
			autoplayTimeout: ckav.getvar(o.attr('data-timeout'), 3000, 'n'),
			autoplayHoverPause: ckav.getvar(o.attr('data-hstop'), true, 'b'),
			loop: ckav.getvar(o.attr('data-loop'), false, 'b'),
			autoWidth: ckav.getvar(o.attr('data-awidth'), false, 'b'),
			autoHeight: ckav.getvar(o.attr('data-hauto'), true, 'b'),
			touchDrag: ckav.getvar(o.attr('data-tdrag'), true, 'b'),
			mouseDrag: ckav.getvar(o.attr('data-mdrag'), true, 'b'),
			pullDrag: ckav.getvar(o.attr('data-pdrag'), true, 'b'),
			contentHeight: ckav.getvar(o.attr('data-h'), true, 'b')
		}
		o.animate({ opacity: 1 }, 300, function () {

			if (owlEle.find(".owl-stage").length === 0) {
				owlEle.owlCarousel({
					center: config.center,
					stagePadding: config.stagePadding,
					items: config.items,
					margin: config.margin,
					nav: config.nav,
					dots: config.dots,
					slideBy: config.slideby,
					navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
					responsiveBaseElement: config.rbase,
					responsive: config.res,
					loop: $(owlObj + " .owl-carousel > .item").length > 1 ? config.loop : false,
					animateOut: config.animOut, //'slideOutDown',
					animateIn: config.animIn, //'flipInX',
					autoplay: config.autoplay,
					autoplayTimeout: config.autoplayTimeout,
					autoplayHoverPause: config.autoplayHoverPause,
					autoHeight: config.autoHeight,
					autoWidth: config.autoWidth,
					touchDrag: config.touchDrag,
					mouseDrag: config.mouseDrag,
					pullDrag: config.pullDrag,
					autoplaySpeed: 2000,

					onInitialized: function () {
						owlEle.animate({ opacity: 1 }, 300);
						
						// ALIGN ARROW
						owlEle.find('.owl-nav').css({
							top: owlEle.find('.owl-stage-outer').outerHeight() / 2
						});
					}
				});

				o.find('.carousel-btn .prev').on('click', function () { owlEle.trigger('prev.owl.carousel'); });
				o.find('.carousel-btn .next').on('click', function () { owlEle.trigger('next.owl.carousel'); });
			}
		});
	}	

	/* CAROUSEL WIDGET  
	------------------------------------*/
	if ($o.carouselwidget) {
		for (var i = 0; i < $o.carouselwidget.length; i++) {
			
			// SET ID ON ALL OBJECTS
			var owlObj = 'owl' + i;
			$($o.carouselwidget[i]).css({ opacity: 0 }).attr("id", owlObj).addClass(owlObj);
			ckav.slider("#" + owlObj);
		}
	}
	
	
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
	/* TABS  
	------------------------------------*/
	ckav.tabs = function (obj) {
		'use strict';

		if ($(obj.tb).hasClass('tabs-auto')) {
			var t = 0,
				tb_activeClass = $(obj.tb).attr('data-tb-active') ? 'active '+$(obj.tb).attr('data-tb-active') : 'active',
				pn_activeClass = $(obj.tb).attr('data-pn-active') ? 'active '+$(obj.tb).attr('data-pn-active') : 'active',
				
				tb_normalClass = $(obj.tb).attr('data-tb-normal') ? $(obj.tb).attr('data-tb-normal') : '',
				pn_normalClass = $(obj.tb).attr('data-pn-normal') ? $(obj.tb).attr('data-pn-normal') : '';

			$(obj.tb).find('.tb-list > .tb').each(function () {
				var tb = obj.count + '-tb-' + t;
				$(this).attr("data-tb", '#' + tb);
				$(this).addClass(tb_normalClass);
				$(obj.tb).find('.tb-content > .tb-pn:eq(' + t + ')').attr("id", tb);
				t++;
			});

			$(obj.tb).on('click', '.tb-list > .tb', function (e) {
				e.preventDefault();

				$(this).closest('.tb-list').find('.tb').removeClass(tb_activeClass).addClass(tb_normalClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tb-pn').removeClass(pn_activeClass);
				target.addClass(pn_activeClass);

			});
			if ($(obj.tb).find('.tb-list > .tb').hasClass(tb_activeClass)) {
				$(obj.tb).find('.tb-list > .tb.active').click();
			} else {
				$(obj.tb).find('.tb-list > .tb:first').click();
			};

		} else {

			$('[data-tb]').each(function (index, el) {
				var target = $(this).attr('data-tb');
				$(target).addClass('tab-pn');
			});
			$(obj).on('click', function (e) {
				e.preventDefault();

				var	tb_activeClass = $(obj).attr('data-tb-active') ? 'active '+$(obj).attr('data-tb-active') : 'active',
					pn_activeClass = $(obj).attr('data-pn-active') ? 'active '+$(obj).attr('data-pn-active') : 'active',
					tb_normalClass = $(obj).attr('data-tb-normal') ? $(obj).attr('data-tb-normal') : '',
					pn_normalClass = $(obj).attr('data-pn-normal') ? $(obj).attr('data-pn-normal') : '';

				$(obj).closest('.tab-widget').find('[data-tb]').addClass(tb_normalClass).removeClass(tb_activeClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tab-pn').addClass(tb_normalClass).removeClass(pn_activeClass).hide();
				target.show().removeClass(tb_normalClass).addClass(pn_activeClass);

			}).eq(0).click();
		};

	}

	/* TAB WIDGET  
	------------------------------------*/
	if ($o.tabwidget) {
		for (var i = 0; i < $o.tabwidget.length; i++) {
			ckav.tabs($($o.tabwidget[i]).find('[data-tb]'));
		}
	}

	/* TAB AUTO  
	------------------------------------*/
	if ($o.tabsauto) {
		for (var i = 0; i < $o.tabsauto.length; i++) {
			var tabObj = {
				count: i,
				tb: $o.tabsauto[i]
			}
			ckav.tabs(tabObj);
		}
	}
	/* ACCORDION  
	------------------------------------*/
	ckav.accordion = function (obj) {
		'use strict';

		function close_acc(parent_obj) {
			$(parent_obj).find('.acc-hd').removeClass('active');
			$(parent_obj).find('.acc-content').stop().slideUp(200).removeClass('open');
		}

		$(obj).animate({ opacity: 1 }, 500, function () { });

		$(obj).on('click', '.acc-hd', function (e) {
			e.stopPropagation();
			e.preventDefault();

			var content = $(this).attr('data-accid');
			if ($(this).is('.active')) {
				close_acc(obj);
			} else {
				close_acc(obj);

				// ADD ACTIVE CLASS TO SECTION TITLE
				$(this).addClass('active');
				
				// OPEN THE HIDDEN CONTENT
				$(obj).find(content).stop().slideDown(200).addClass('open');
			}

		});

		/* FIRST OPEN OPTIONS  
		------------------------------------*/
		if ($(obj).attr("data-acc-firstopen") == 'y') {
			$(obj).find(".acc-block:first .acc-hd").click();
		} else {
			close_acc(obj);
		}

	}

	/* ACCORDIONS WIDGET  
	------------------------------------*/
	if ($o.accordionwidget) {
		for (var i = 0; i < $o.accordionwidget.length; i++) {
			// SET ID ON ALL OBJECTS
			ckav.setId($o.accordionwidget[i], 'accwidget', i);
			ckav.accordion($o.accordionwidget[i]);
		}
	}
	/* FORM VALIDATION  
	------------------------------------*/
	ckav.global_validation = {
		form: '',
		rules: {
			email: { required: true, email: true },
			name: { required: true },
			message: { required: true },
			phone: { required: true, number: true },
			date: { required: true, date: true },
			datetime: { required: true, date: true },
			people: { required: true, number: true }
		},
		msgpos: 'normal',
		msg: {
			email: { email: "Please, enter a valid email" }
		},
		subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
		form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

		successMsg: "",
		errorMsg: "Oops! Looks like something went wrong. Please try again later."
	}

	ckav.formVaidate = function (obj) {
		'use strict';
		var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
		if (msgpos == 'append') {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				errorPlacement: function (error, element) {
					if (msgpos == 'append') {
						error.appendTo(element.closest("form").find('.msg-wrp'));
					};
				},
				success: function (element) {
					element.remove();
				}
			});
		} else {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				success: function (element) {
					element.remove();
				}
			});
		};
	}

	ckav.resetForm = function (form) {
		'use strict';
		$(form).find('input[type="text"], input[type="email"], textarea').val(null);
	}

	ckav.contactForm = function ($form, formData, validate_data) {
		'use strict';

		if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

		var $btn = $form.find(".btn").button('loading');
		var timer = 4000;

		if ($form.valid()) {
			$.ajax({
				url: $form.attr('action'),
				type: 'POST',
				data: formData,
				success: function (data) {
					if (data.status == 'error') {
						
						// EMAIL SUBSCRIPTION ERROR MESSAGE
						swal("Error!", data.type, "error");
						$btn.button('reset');
						ckav.resetForm($form);
					} 
					else {
						swal({
							type: "success",
							title: "Success!",
							text: validate_data.successMsg,
							timer: timer
						})
						.then(function(argument){
							if ($form.attr('data-success-redirect') === 'y') {
								window.location = ckav.config.success_url;
							}
						});
						$btn.button('reset');
						$.magnificPopup.close();
						ckav.resetForm($form);
					};
				},
				error: function () {
					swal("Error!", validate_data.errorMsg, "error");
					$btn.button('reset');
					$.magnificPopup.close();
					setTimeout(function () { swal.close(); }, timer);
				}
			});
		} else {
			$form.find("label.error").delay(timer).fadeOut('400', function () {
				$(this).remove();
			});
			$btn.button('reset');
		};
	}

	ckav.formWidget = function (obj) {
		'use strict';

		var config = {
			popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
			form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
			form_selector: obj
		}

		var $form = $(config.form_selector);

		// VALIDATION RULES
		ckav.global_validation.form = config.form_selector;
		var validate_data = ckav.global_validation;

		// Pop up form
		if (config.popup_selector) {
			$(config.popup_selector).each(function (index, el) {
				$(this).magnificPopup({
					type: 'inline',
					preloader: false
				});
			});
		};

		// DATE AND TIME PICKER OPTIONS
		if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {
			var date_script_arr = [
				"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
			];

			ckav.getMultiScripts(date_script_arr, '').done(function () {
				// DATE PICKER
				if ($form.find(".date-pick").length > 0) {
					$form.find(".date-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true,
							startView: 2,
							minView: 2
						});
					});
				};

				// DATE TIME PICKER
				if ($form.find(".datetime-pick").length > 0) {
					$form.find(".datetime-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true
						});
					});
				};
			});
		}
		

		// FORM VALIDATION
		ckav.formVaidate(validate_data);

		// FORM
		$form.find('button').off('click').on('click', function (e) {
			e.preventDefault();
			if (config.form_type == "newsletter") {
				ckav.global_validation.successMsg = ckav.global_validation.subscribe_successMsg;
			} else {
				ckav.global_validation.successMsg = ckav.global_validation.form_successMsg;
			};
			ckav.contactForm($form, $form.serializeObject(), validate_data);
			return false;
		});
	}

	$.fn.serializeObject = function () {
		'use strict';

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {

			// Field labels
			var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

			// Field values
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push({ val: this.value, label: field_label } || '');
			} else {
				//o[this.name] = this.value || '';
				o[this.name] = { val: this.value, label: field_label } || '';
			}
		});
		return o;
	};

	/* FORM WIDGET  
	------------------------------------*/
	if ($o.formwidget) {
		for (var i = 0; i < $o.formwidget.length; i++) {
			$o.formwidget[i]
			ckav.formWidget($o.formwidget[i]);
			if ($('html').hasClass('builder')) {
				$($o.formwidget[i]).find('button').attr('disabled', true);
			} else {
				$($o.formwidget[i]).find('button').attr('disabled', false);
			}
		}
	};
	
	/* VIDEO BACKGROUND JS  
	------------------------------------*/
	ckav.videoBg = function (obj, imglist) {
		'use strict';
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			$(obj).css("display", "none");
		}
		else {
			$(obj).css("display", "block");
			if ($(obj).attr('data-videoid')) {
				$(obj).YTPlayer({
	    			videoId: $(obj).attr('data-videoid'),
	    			start: $(obj).attr('data-start') ? parseInt($(obj).attr('data-start')) : 0,
					onReady: function (player) { }
				});
			}
		}
	}

	/* VIDE
	------------------------------------*/
	ckav.vide = function (obj) {
		'use strict';

		var videofile = $(obj).attr("data-vide-src");
		$(obj).animate({ opacity: 1 }, 500, function () { });
		$(obj).vide({
			mp4: videofile,
			webm: videofile,
			ogv: videofile,
			poster: videofile + ".jpg"
		}, 
		{
			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,
			position: 'center center', // Similar to the CSS `background-position` property.
			posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
			resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
			bgColor: 'transparent', // Allow custom background-color for Vide div,
			className: '' // Add custom CSS class to Vide div
		});
	}

	/* VIDEO BACKGROUND
	------------------------------------*/
	if ($o.videobg) {
		for (var i = 0; i < $o.videobg.length; i++) {
			if ($($o.videobg[i]).attr('data-videoid')) {
				ckav.videoBg($o.videobg[i]);
			}
		}
	};
	if ($o.videwidget) {
		for (var i = 0; i < $o.videwidget.length; i++) {
			ckav.setId($o.videwidget[i], 'videwidget', i);
			ckav.vide($o.videwidget[i]);
		}
	}

	
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
	
	/* BACKGROUND SLIDERS
	------------------------------------*/
	ckav.bgSlider = function (setting) {
		'use strict';
		setTimeout(function () {
			$(setting.obj).vegas({
				delay: setting.delay,
				slides: setting.slides,
				animation: setting.effect
			});
		}, 1000);

	}

	/* BACKGROUND SLIDER WIDGET 
	------------------------------------*/
	if ($o.bgslider) {
		for (var i = 0; i < $o.bgslider.length; i++) {
			if ($($o.bgslider[i]).attr('data-bgslider')) {


				var s1 = $($o.bgslider[i]).attr('data-bgslider'),
					s2 = s1.split('|'),
					el = $o.bgslider[i],
					bgslides = [];
				
				$.each(s2, function (index, val) {
					bgslides.push({ src: val });
				});
				
				$(el).vegas({
					delay: 6000,
					slides: bgslides,
					timer: false,
					animation: 'kenburns'
				});
			}
			
		}
	};
	/* COUNTDOWN CLOCK
	------------------------------------*/
	ckav.countdown = function (obj) {
		'use strict';

		var o = $(obj);
		var config = {
			day: parseInt(o.attr("data-day"), 10),
			month: parseInt(o.attr("data-month"), 10),
			year: parseInt(o.attr("data-year"), 10),
			hour: parseInt(o.attr("data-hr"), 10),
			min: parseInt(o.attr("data-min"), 10),
			sec: parseInt(o.attr("data-sec"), 10)
		}

		var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date(config.year, config.month - 1, config.day - 1);
		var d = new Date();
		var secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

		var countdownHtml = '<div class="inner-dashboard">';
		countdownHtml += '	<!-- DAYS -->';
		countdownHtml += '	<div class="dash days_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += diffDays > 99 ? '<div class="digit">0</div>' : '';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">days</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- HOURS -->';
		countdownHtml += '	<div class="dash hours_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">hours</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- MINIUTES -->';
		countdownHtml += '	<div class="dash minutes_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">minutes</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- SECONDS -->';
		countdownHtml += '	<div class="dash seconds_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">seconds</span>';
		countdownHtml += '	</div>';
		countdownHtml += '</div>';

		o.html(countdownHtml);

		// DESKTOP CLOCK
		o.countDown({
			targetDate: {
				'day': config.day,
				'month': config.month,
				'year': config.year,
				'hour': config.hour,
				'min': config.min,
				'sec': config.sec
			},
			omitWeeks: true
		});
	}

	/* COUNTDOWN WIDGET
	------------------------------------*/
	if ($o.countdownwidget) {
		for (var i = 0; i < $o.countdownwidget.length; i++) {
			$($o.countdownwidget[i]).children('div').attr("id", 'countdown' + i);
			ckav.countdown("#countdown" + i);
		}
	}
	
	/* FILTER ITEMS  
	------------------------------------*/
	ckav.filter = function (obj) {
		'use strict';

		$(obj).animate({ opacity: 1 }, 500, function () { });
		var filterObj = $(obj);
		var container = filterObj.find('.filter-container');
		var list = filterObj.find('.filter-list');
		var time = 500;

		list.find('[data-filter]').on('click', function (event) {
			event.preventDefault();

			var filter = $(this).attr("data-filter");

			list.find("[data-filter]").removeClass('active');
			$(this).addClass('active');

			container.find('.filter-content').stop().animate({ opacity: 0 }, 150, function () {
				$(this).hide();
				if (filter == 'all') {
					container.find('.filter-content').show().stop().animate({ opacity: 1 }, time);
				} else {
					$(filter).show().stop().animate({ opacity: 1 }, time);
				}
			});

		});

		list.find('.active') ? list.find('.active').trigger('click') : list.find('[data-filter]').first().trigger('click');
	}

	/* FILTER WIDGET
	------------------------------------*/
	if ($o.filterwidget) {
		for (var i = 0; i < $o.filterwidget.length; i++) {
			$o.filterwidget[i]
			ckav.setId($o.filterwidget[i], 'filterwidget', i);
			ckav.filter($o.filterwidget[i]);
		}
	}
	/* LAZY LOADING IMAGE
	------------------------------------*/
	ckav.blazyload = function (obj){
		'use strict';

		var bLazy = new Blazy({
			loadInvisible: true,
			success: function(ele){
				if ($(obj).hasClass('owl-carousel')) {
					$(obj).find('.owl-nav').css({
						top: $(obj).find('.owl-stage-outer').outerHeight() / 2
					});
				}
			}
		});
	}

	if ($o.bLazy) {
		ckav.blazyload();
	}
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
	
	/* BACKGROUND IMAGE  
	------------------------------------*/
	if ($o.bgimg) {
		for (var i = 0; i < $o.bgimg.length; i++) {
			ckav.bgimg($o.bgimg[i]);
		}
	}
	
	/* BACKGROUND COLOR
	------------------------------------*/
	if ($o.bgcolor) {
		for (var i = 0; i < $o.bgcolor.length; i++) {
			$($o.bgcolor[i]).css({ backgroundColor: $($o.bgcolor[i]).attr("data-bgcolor") });
		}
	}
	
	/* TEXT COLORS
	------------------------------------*/
	if ($o.txtcolor) {
		for (var i = 0; i < $o.txtcolor.length; i++) {
			$($o.txtcolor[i]).css({ color: $($o.txtcolor[i]).attr("data-txtcolor") });
		}
	}

	/* HOVER COLOR
	------------------------------------*/
	if ($o.hoverclass) {
		for (var i = 0; i < $o.hoverclass.length; i++) {
			var hov_class = $($o.hoverclass[i]).attr('data-hover-class');
			$($o.hoverclass[i]).hover(
				function() {
					$(this).addClass(hov_class);
				}, function() {
					$(this).removeClass(hov_class);
				}
			);
		}
	}
	
	/* LINER GREDIENT
	------------------------------------*/
	if ($o.gradient) {
		for (var i = 0; i < $o.gradient.length; i++) {
			$o.gradient[i]

			var grd_colors = $($o.gradient[i]).attr('data-g-colors'),
				grd_color = grd_colors.split('|');
			$($o.gradient[i]).css({
				background: "linear-gradient(to bottom, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
			});
		}
	}

	/* RADIAL GREDIENT
	------------------------------------*/
	if ($o.rgradient) {
		for (var i = 0; i < $o.rgradient.length; i++) {
			$o.rgradient[i]

			var rgrd_colors = $($o.rgradient[i]).attr('data-rg-colors'),
				rgrd_color = rgrd_colors.split('|');
			$($o.rgradient[i]).css({
				background: "radial-gradient(circle, " + rgrd_color[0] + " 0%, " + rgrd_color[1] + " 100%)",
			});
		}
	}

	/* ANIMATE ELEMENTS
	------------------------------------*/
	if ($o.elanimate) {
		for (var i = 0; i < $o.elanimate.length; i++) {

			var animateobj = $($o.elanimate[i]),
				animatein = animateobj.attr('data-animate-in'),
				animatearr = animatein.indexOf('|') > -1 ? animatein.split('|') : animatein,
				animateclass = typeof animatearr == 'object' ? animatearr[0] : animatearr,
				animatedelay = typeof animatearr == 'object' ? animatearr[1] : 0;

			animateobj.css({
				'-webkit-animation-delay': animatedelay + 's',
				'animation-delay': animatedelay + 's'
			});

			animateobj.viewportChecker({
				classToAdd: 'animated ' + animateclass,
				offset: 100
			});
		}
	}

	/* PARALLAX
	------------------------------------*/
	// if ($o.stellar) {

	// 	for (var i = 0; i < $o.stellar.length; i++) {
	// 		$($o.stellar[i]).parent().css({ overflow: 'hidden' });
	// 	}
		
	// 	$.stellar({
	// 		positionProperty: 'transform',
	// 		horizontalScrolling: false,
	// 		hideDistantElements: false
	// 	});
	// }


	/**
	* Material Parallax
	* @description Enables Material Parallax plugin
	*/
	// if ($o.jparallax) {
	// 	if (!isIE && !isMobile) {
	// 		for (var i = 0; i < $o.parallax.length; i++) {
	// 			$($o.parallax[i]).parallax();
	// 		}
	// 	} else {
	// 		for (var i = 0; i < $o.parallax.length; i++) {
	// 			var parallax = $($o.parallax[i]),
	// 			  	imgPath = parallax.data("parallax-img");

	// 			parallax.css({
	// 				"background-image": 'url(' + imgPath + ')',
	// 				"background-attachment": "fixed",
	// 				"background-size": "cover"
	// 			});
	// 		}
	// 	}
	// }

	ckav.jparallax = function(obj) {
		$(obj).jarallax({
		    speed: $(obj).attr('data-speed')
		});
	}

	if ($o.jparallax) {
		for (var i = 0; i < $o.jparallax.length; i++) {
			ckav.jparallax($o.jparallax[i]);
		}
	}
	/* COUNT BOX
	------------------------------------*/
	if ($o.countbox) {
		var count_obj = document.querySelectorAll(".count-box");

		for (var i = 0; i < count_obj.length; i++) {
			var count_b = count_obj[i], //$($o.countbox[i]),
				count_o = $(count_b).find('.count'),
				count_val = parseInt(count_o.text()),
				count_prefix = count_o.attr('data-prefix'),
				count_suffix = count_o.attr('data-suffix'),

				options = {
					useEasing: true, 
					useGrouping: true, 
					separator: ',', 
					decimal: '.', 
					prefix: count_prefix ? count_prefix : '', 
					suffix: count_suffix ? count_suffix : '' 
				};


			// Params: Obj | Start val | End val | Decimals | Duration | options;
			var count_box = new CountUp(count_b.querySelector(".count"), 0, count_val, 0, 3, options);

			if (!count_box.error) {
				count_box.start();
			} else {
				console.error(count_box.error);
			}
		}
		
	};
	/* MOBILE MENU
	------------------------------------*/
	if ($o.menuicon) {
		var button = $(".menu-icon");
		var pageLink = $(".sectionlink");
		var header = $(".header");
		button.on("click", function() {
			button.toggleClass('open');
			header.toggleClass('active-open');
		});

		pageLink.on("click", function() {
			button.toggleClass('open');
			pageLink.toggleClass('open');
			header.toggleClass('active-open');
		});
	};

	/*----------  ANIMATION OUT  ----------*/
	ckav.animationOut = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");

		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');

			if (animateOut || animateIn) {
				if (animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;
				}
				if (animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animateIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;
				}

				
				animateobj.css({
					'-webkit-animation-delay' : animatedelayout+'s',
					'animation-delay' : animatedelayout+'s'
				});
				
				animateobj.removeClass(animateclassout).removeClass(animateclassin).addClass(animateclassout);
			}

		}
	}

	/*----------  ANIMATION IN  ----------*/
	ckav.animationIn = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");
		
		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');
			
			if (animateOut || animateIn) {
				if(animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;	
				}

				if(animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animateIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;	
				}

				animateobj.css({
					'-webkit-animation-delay' : animatedelayin+'s',
					'animation-delay' : animatedelayin+'s'
				});
				
				animateobj.removeClass(animateclassin).removeClass(animateclassout).addClass(animateclassin);
			}

		}
	}	

	/* NAVIGATION
	------------------------------------*/
	ckav.mainNavigation = function(obj) {
		var sectionhash = $(".swiper-slide-active").attr("data-hash");
		$(".nav-ul .sectionlink, .fullscreen-nav-ul .sectionlink").removeClass("active-hashlink");
		$(".nav-ul, .fullscreen-nav-ul").find("[data-hashlink='"+ sectionhash +"']").addClass("active-hashlink");
	}

	/* DEVICE CHECK
	------------------------------------*/

	ckav.themecheck = function(obj) {
		
		var sectiontheme = $(".swiper-slide-active").attr("data-stheme");

		if(sectiontheme == "sdark") {
			$("body").removeClass("slight");
			$("body").addClass("sdark");
		}
		if(sectiontheme == "slight") {
			$("body").removeClass("sdark");
			$("body").addClass("slight");
		}
	}

	/* PAGE TRANSITION
	------------------------------------*/
	if ($o.pages) {
		var paginationStyle, myPlugin, ptooltip;
		
		if($("body").hasClass("ckav-l3")) {
		
			myPlugin = {
					name: 'debugger',
					params: {
					debugger: false,
				},
				on: {
					transitionStart: function () {
						ckav.animationOut(".page-section");
					},
					transitionEnd: function () {
						ckav.animationIn(".page-section.swiper-slide-active");
						ckav.mainNavigation();
						ckav.themecheck();
					}
				}
			};
			
		}
		else {
			myPlugin = {
					name: 'debugger',
					params: {
					debugger: false,
				},
				on: {
					transitionStart: function () {
						ckav.animationOut(".page-section");
					},
					transitionEnd: function () {
						ckav.animationIn(".page-section.swiper-slide-active");
						ckav.mainNavigation();
					}
				},
			};
		}

		Swiper.use(myPlugin);
		
		var secname = $("[data-mytooltip]").attr("data-mytooltip"),
			tooltiparr =  secname.split(","),
			tooltip = [];

		for (var i = 0; i < tooltiparr.length; i++) {
			var tooltip_el = tooltiparr[i].split(",");
			tooltip.push(tooltip_el[0]);
		}

		ckav.config.pageitooltip = tooltip;


		var scroller = new Swiper('.scrollwrapper', {
			direction: 'vertical',
			//effect: ckav.config.scrollEffect,
			spaceBetween: 0,
			mousewheel: true,
			speed: 1000,
			keyboard: true,
			hashNavigation: {
				watchState: true,
			},
			allowTouchMove: false,
			pagination: {
				el: '.scrollwrapper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
						return '<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide'+ index +'" tooltip="'+ckav.config.pageitooltip[index]+'" flow="left"></span>';
				}
			},
		});
	};

	/* SCROLL STICKY
	------------------------------------*/
	ckav.scrollsticky = function() {
		if($("html").hasClass("ckav-mobile")) {
			return false;
		}
		else {
			if($o.scrollsticky) {
				var scrollelement = $(".ckav-pages");
				var scrollstickyelement = $("[data-scrollsticky='y']");
	
				scrollstickyelement.removeClass('scrollsticky-on');
				scrollelement.on("scroll", function() {
					var calheight = scrollstickyelement.height();
	
					if( $(this).scrollTop() >= calheight ) {
						scrollstickyelement.addClass('scrollsticky-on');
					} 
					else {
						scrollstickyelement.removeClass('scrollsticky-on');
					}
				});
			}
			else {
				return false;
			}
		}
	}
		/* RESPONSIVE  
		------------------------------------*/
		enquire.register("screen and (min-width: 992px)", {
			match : function() {
				$("html").addClass("ckav-desktop");
				if ($o.menuwrp) {
					var $menu = $('.menu');
					ckav.menuFn($menu);
				}

				if ($('html').hasClass('data-sticky')) {
					
					/* CHANGE STICKY WITH SCROLL FOR SMALL SCREEN*/
					$('.main-head').attr('data-sticky', 'y').removeAttr('data-sticky-scroll', 'y');
					$('[data-sticky]').addClass('fixed-top');
				}
			},
			unmatch : function() {}
		}).register("(min-width: 200px) and (max-width: 991px)", {
			match : function() {
				$("html").addClass("ckav-mobile");
				if ($o.menuwrp) {
					var $menu = $('.menu');
					$menu.find('.has-dropdown').off('mouseenter');
					$menu.find('.has-dropdown').off('mouseleave');
					$menu.removeAttr('style');
				}

				ckav.mobmenu('.nav-handle');
				$('html').addClass('data-sticky');
				$('[data-sticky]').removeClass('fixed-top');

				/* CHANGE STICKY WITH SCROLL FOR SMALL SCREEN*/
				$('.main-head').removeAttr('data-sticky').attr('data-sticky-scroll', 'y');
			},  
			unmatch : function() {
				$('[data-sticky]').addClass('fixed-top');
				if ($o.menuwrp) {
					var $menu = $('.menu');
					ckav.menuFn($menu);
				}
			}
		});	


		
	} else {
		$o.r ? ckav.demo() : $('html').html('');
	}

	});
})();