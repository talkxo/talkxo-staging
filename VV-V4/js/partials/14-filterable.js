	
	/* FILTER ITEMS  
	------------------------------------*/
	ckav.filter = function (obj) {
		'use strict';

		$(obj).animate({ opacity: 1 }, 500, function () { });
		var filterObj = $(obj);
		var container = filterObj.find('.filter-container');
		var list = filterObj.find('.filter-list');
		var time = 500;

		list.find('[data-filter]').on('click', function (event) {
			event.preventDefault();

			var filter = $(this).attr("data-filter");

			list.find("[data-filter]").removeClass('active');
			$(this).addClass('active');

			container.find('.filter-content').stop().animate({ opacity: 0 }, 150, function () {
				$(this).hide();
				if (filter == 'all') {
					container.find('.filter-content').show().stop().animate({ opacity: 1 }, time);
				} else {
					$(filter).show().stop().animate({ opacity: 1 }, time);
				}
			});

		});

		list.find('.active') ? list.find('.active').trigger('click') : list.find('[data-filter]').first().trigger('click');
	}

	/* FILTER WIDGET
	------------------------------------*/
	if ($o.filterwidget) {
		for (var i = 0; i < $o.filterwidget.length; i++) {
			$o.filterwidget[i]
			ckav.setId($o.filterwidget[i], 'filterwidget', i);
			ckav.filter($o.filterwidget[i]);
		}
	}