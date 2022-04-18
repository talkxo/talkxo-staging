	/* FORM VALIDATION  
	------------------------------------*/
	ckav.global_validation = {
		form: '',
		rules: {
			email: { required: true, email: true },
			name: { required: true },
			message: { required: true },
			phone: { required: true, number: true },
			date: { required: true, date: true },
			datetime: { required: true, date: true },
			people: { required: true, number: true }
		},
		msgpos: 'normal',
		msg: {
			email: { email: "Please, enter a valid email" }
		},
		subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
		form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

		successMsg: "",
		errorMsg: "Oops! Looks like something went wrong. Please try again later."
	}

	ckav.formVaidate = function (obj) {
		'use strict';
		var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
		if (msgpos == 'append') {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				errorPlacement: function (error, element) {
					if (msgpos == 'append') {
						error.appendTo(element.closest("form").find('.msg-wrp'));
					};
				},
				success: function (element) {
					element.remove();
				}
			});
		} else {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				success: function (element) {
					element.remove();
				}
			});
		};
	}

	ckav.resetForm = function (form) {
		'use strict';
		$(form).find('input[type="text"], input[type="email"], textarea').val(null);
	}

	ckav.contactForm = function ($form, formData, validate_data) {
		'use strict';

		if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

		var $btn = $form.find(".btn").button('loading');
		var timer = 4000;

		if ($form.valid()) {
			$.ajax({
				url: $form.attr('action'),
				type: 'POST',
				data: formData,
				success: function (data) {
					if (data.status == 'error') {
						
						// EMAIL SUBSCRIPTION ERROR MESSAGE
						swal("Error!", data.type, "error");
						$btn.button('reset');
						ckav.resetForm($form);
					} 
					else {
						swal({
							type: "success",
							title: "Success!",
							text: validate_data.successMsg,
							timer: timer
						})
						.then(function(argument){
							if ($form.attr('data-success-redirect') === 'y') {
								window.location = ckav.config.success_url;
							}
						});
						$btn.button('reset');
						$.magnificPopup.close();
						ckav.resetForm($form);
					};
				},
				error: function () {
					swal("Error!", validate_data.errorMsg, "error");
					$btn.button('reset');
					$.magnificPopup.close();
					setTimeout(function () { swal.close(); }, timer);
				}
			});
		} else {
			$form.find("label.error").delay(timer).fadeOut('400', function () {
				$(this).remove();
			});
			$btn.button('reset');
		};
	}

	ckav.formWidget = function (obj) {
		'use strict';

		var config = {
			popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
			form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
			form_selector: obj
		}

		var $form = $(config.form_selector);

		// VALIDATION RULES
		ckav.global_validation.form = config.form_selector;
		var validate_data = ckav.global_validation;

		// Pop up form
		if (config.popup_selector) {
			$(config.popup_selector).each(function (index, el) {
				$(this).magnificPopup({
					type: 'inline',
					preloader: false
				});
			});
		};

		// DATE AND TIME PICKER OPTIONS
		if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {
			var date_script_arr = [
				"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
			];

			ckav.getMultiScripts(date_script_arr, '').done(function () {
				// DATE PICKER
				if ($form.find(".date-pick").length > 0) {
					$form.find(".date-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true,
							startView: 2,
							minView: 2
						});
					});
				};

				// DATE TIME PICKER
				if ($form.find(".datetime-pick").length > 0) {
					$form.find(".datetime-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true
						});
					});
				};
			});
		}
		

		// FORM VALIDATION
		ckav.formVaidate(validate_data);

		// FORM
		$form.find('button').off('click').on('click', function (e) {
			e.preventDefault();
			if (config.form_type == "newsletter") {
				ckav.global_validation.successMsg = ckav.global_validation.subscribe_successMsg;
			} else {
				ckav.global_validation.successMsg = ckav.global_validation.form_successMsg;
			};
			ckav.contactForm($form, $form.serializeObject(), validate_data);
			return false;
		});
	}

	$.fn.serializeObject = function () {
		'use strict';

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {

			// Field labels
			var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

			// Field values
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push({ val: this.value, label: field_label } || '');
			} else {
				//o[this.name] = this.value || '';
				o[this.name] = { val: this.value, label: field_label } || '';
			}
		});
		return o;
	};

	/* FORM WIDGET  
	------------------------------------*/
	if ($o.formwidget) {
		for (var i = 0; i < $o.formwidget.length; i++) {
			$o.formwidget[i]
			ckav.formWidget($o.formwidget[i]);
			if ($('html').hasClass('builder')) {
				$($o.formwidget[i]).find('button').attr('disabled', true);
			} else {
				$($o.formwidget[i]).find('button').attr('disabled', false);
			}
		}
	};
	