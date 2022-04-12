
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