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