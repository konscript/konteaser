jQuery(document).ready(function($) {
	
	// Hide elements that will be animated
	$('#forging-dot, #forging, #description, #clients, #contact').hide();
	$('a').css('textDecoration', 'none');
	
	// Chain animate elements
	$('#logo-highlight').css({opacity: 0, marginTop: '-50px'}).animate({opacity: 1, marginTop: 0}, 2000, function() {
		$('#logo-highlight').animate({opacity: 0}, 300);
	});

	$('#logo').css({opacity: 0, marginTop: '-50px'}).animate({opacity: 1, marginTop: 0}, 2000);
	$('#title').css({opacity: 0, marginLeft: '-50px'}).animate({opacity: 1, marginLeft: 0}, 2000, function() {
		$('#forging-dot, #forging').fadeIn(500, function() {
			$('#description').fadeIn(500, function() {
				$('#clients').fadeIn(500, function() {
					$('#contact').fadeIn(500, function() {
						pulsate();
					});
				});
			});
		});
	});
	
	// Enable link hovering effect
	hoveringLinks();		
		
});

// Makes clickable links pulsate sequentially
function pulsate() {
	
	$('.pulse:not(.pulsating):first').animate({opacity: 0.3}, 200, function() {
		$(this).animate({opacity: 1}, 100, function(){
		  	$(this).addClass('pulsating');
    		pulsate();
    	});
  	});
}	

// Fades out links when hovering
function hoveringLinks() {

	$('.pulse').hover(function(){
		$(this).stop().animate({opacity: 0.3});
	}, function() {
		$(this).stop().animate({opacity: 0.95});
	});

}