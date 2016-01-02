$('.appsbtn').click(function() {
	if ($('.appbox').is(":visible")) {
		$('.appbox').hide();
	} else {
		$('.appbox').show();		
	}
});

$('body').click(function(event) {
	if ($(event.target).closest($('.appbox')).length == 0 && $(event.target).closest($('.appsbtn')).length == 0) {
		$('.appbox').hide();
	}
});