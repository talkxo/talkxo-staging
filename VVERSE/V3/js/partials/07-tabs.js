	/* TABS  
	------------------------------------*/
	ckav.tabs = function (obj) {
		'use strict';

		if ($(obj.tb).hasClass('tabs-auto')) {
			var t = 0,
				tb_activeClass = $(obj.tb).attr('data-tb-active') ? 'active '+$(obj.tb).attr('data-tb-active') : 'active',
				pn_activeClass = $(obj.tb).attr('data-pn-active') ? 'active '+$(obj.tb).attr('data-pn-active') : 'active',
				
				tb_normalClass = $(obj.tb).attr('data-tb-normal') ? $(obj.tb).attr('data-tb-normal') : '',
				pn_normalClass = $(obj.tb).attr('data-pn-normal') ? $(obj.tb).attr('data-pn-normal') : '';

			$(obj.tb).find('.tb-list > .tb').each(function () {
				var tb = obj.count + '-tb-' + t;
				$(this).attr("data-tb", '#' + tb);
				$(this).addClass(tb_normalClass);
				$(obj.tb).find('.tb-content > .tb-pn:eq(' + t + ')').attr("id", tb);
				t++;
			});

			$(obj.tb).on('click', '.tb-list > .tb', function (e) {
				e.preventDefault();

				$(this).closest('.tb-list').find('.tb').removeClass(tb_activeClass).addClass(tb_normalClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tb-pn').removeClass(pn_activeClass);
				target.addClass(pn_activeClass);

			});
			if ($(obj.tb).find('.tb-list > .tb').hasClass(tb_activeClass)) {
				$(obj.tb).find('.tb-list > .tb.active').click();
			} else {
				$(obj.tb).find('.tb-list > .tb:first').click();
			};

		} else {

			$('[data-tb]').each(function (index, el) {
				var target = $(this).attr('data-tb');
				$(target).addClass('tab-pn');
			});
			$(obj).on('click', function (e) {
				e.preventDefault();

				var	tb_activeClass = $(obj).attr('data-tb-active') ? 'active '+$(obj).attr('data-tb-active') : 'active',
					pn_activeClass = $(obj).attr('data-pn-active') ? 'active '+$(obj).attr('data-pn-active') : 'active',
					tb_normalClass = $(obj).attr('data-tb-normal') ? $(obj).attr('data-tb-normal') : '',
					pn_normalClass = $(obj).attr('data-pn-normal') ? $(obj).attr('data-pn-normal') : '';

				$(obj).closest('.tab-widget').find('[data-tb]').addClass(tb_normalClass).removeClass(tb_activeClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tab-pn').addClass(tb_normalClass).removeClass(pn_activeClass).hide();
				target.show().removeClass(tb_normalClass).addClass(pn_activeClass);

			}).eq(0).click();
		};

	}

	/* TAB WIDGET  
	------------------------------------*/
	if ($o.tabwidget) {
		for (var i = 0; i < $o.tabwidget.length; i++) {
			ckav.tabs($($o.tabwidget[i]).find('[data-tb]'));
		}
	}

	/* TAB AUTO  
	------------------------------------*/
	if ($o.tabsauto) {
		for (var i = 0; i < $o.tabsauto.length; i++) {
			var tabObj = {
				count: i,
				tb: $o.tabsauto[i]
			}
			ckav.tabs(tabObj);
		}
	}