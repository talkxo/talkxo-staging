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