	/* COUNT BOX
	------------------------------------*/
	if ($o.countbox) {
		var count_obj = document.querySelectorAll(".count-box");

		for (var i = 0; i < count_obj.length; i++) {
			var count_b = count_obj[i], //$($o.countbox[i]),
				count_o = $(count_b).find('.count'),
				count_val = parseInt(count_o.text()),
				count_prefix = count_o.attr('data-prefix'),
				count_suffix = count_o.attr('data-suffix'),

				options = {
					useEasing: true, 
					useGrouping: true, 
					separator: ',', 
					decimal: '.', 
					prefix: count_prefix ? count_prefix : '', 
					suffix: count_suffix ? count_suffix : '' 
				};


			// Params: Obj | Start val | End val | Decimals | Duration | options;
			var count_box = new CountUp(count_b.querySelector(".count"), 0, count_val, 0, 3, options);

			if (!count_box.error) {
				count_box.start();
			} else {
				console.error(count_box.error);
			}
		}
		
	};