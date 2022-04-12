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