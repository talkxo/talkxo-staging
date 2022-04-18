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