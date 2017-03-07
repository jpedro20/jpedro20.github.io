
$(function() {
	var targetOffset = 1000;

	$(window).scroll(function() {
		$(this).scrollTop() > targetOffset ?
			$('.back-to-top').fadeIn() :
			$('.back-to-top').fadeOut();
	});

	$('.back-to-top').on('click', function(event) {
		event.preventDefault();
		$('body,html').animate({ scrollTop: 0 }, 700);
	});
});
