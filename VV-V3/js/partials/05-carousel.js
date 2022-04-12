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
	