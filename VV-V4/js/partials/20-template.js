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