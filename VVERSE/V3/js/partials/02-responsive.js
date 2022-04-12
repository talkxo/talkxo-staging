	/* RESPONSIVE
	------------------------------------*/
	enquire.register("screen and (min-width: 992px)", {
		match : function() {
			ckav.device = 'd';
		},  
		unmatch : function() {}
	}).register("(min-width: 200px) and (max-width: 991px)", {
		match : function() {
			ckav.device = 'm';
		},  
		unmatch : function() {}
	});