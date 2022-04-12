	
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