$(function () {

	$('.accordion').on('click', '.accordion-button', function (e) {
		
		//$(this).parent().find('.accordion-panel').slideUp();

		$(this)
			.next('.accordion-panel')
			.slideToggle();
	});


	$('.tab-list').each(function () {
		
		var $this = $(this);
			// Store this list
			var $tab = $this.find('li.active');
				var $link = $tab.find('a');
					// Get its link
					var $panel = $($link.attr('href'));
		// Get active panel
		$this.on('click', '.tab-control', function (e) {
			// Click tab
			e.preventDefault();
			// Prevent link
			var $link = $(this);
			// Store current link
			var id = this.hash;
			// Get clicked tab
			if (id && !$link.parent().is('.active')) {
				// If not active
				$panel.removeClass('active');
				// Make panel and
				$tab.removeClass('active');
				// tab inactive
				$panel = $(id).addClass('active');
				// Make new panel and
				$tab = $link.parent().addClass('active');
				// tab active 
			}
		});
	});


});