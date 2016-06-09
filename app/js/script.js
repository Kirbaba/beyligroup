jQuery(document).ready(function($) {
	$('.page__tabs_target').click(function(event) {
		$('.page__tabs_target').removeClass('page__tabs_active');
		$(this).addClass('page__tabs_active');
		event.preventDefault();
		var target = ($(this).data('tab'));		
		
		$('.page__tabcontent').hide();
		$("."+ target).show();
	});
});