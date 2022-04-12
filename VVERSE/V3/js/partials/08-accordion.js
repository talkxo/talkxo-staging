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