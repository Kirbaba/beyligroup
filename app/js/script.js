jQuery(document).ready(function($) {
	$('.page__tabs_target').click(function(event) {
		$('.page__tabs_target').removeClass('page__tabs_active');
		$(this).addClass('page__tabs_active');
		event.preventDefault();
		var target = ($(this).data('tab'));		
		
		$('.page__tabcontent').hide();
		$("."+ target).show();
	});

	$('.home__entry_logo').click(function(event) {
		event.preventDefault();
		$('.enter_screen').hide();
		$('.home__projects').hide();
		$('.menu').show();
	});

	$('.menu_close').click(function(event) {
		event.preventDefault();
		$('.menu').hide();
		$('.enter_screen').show();
		$('.home__projects').show();
	});
});