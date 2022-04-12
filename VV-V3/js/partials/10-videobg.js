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

	