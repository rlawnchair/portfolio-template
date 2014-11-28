jQuery(document).ready(function(){
				NProgress.start();
				NProgress.done() 
			var nav = $('.navbar'),
				doc = $(document),
				win = $(window);

			win.scroll(function() {

				if (doc.scrollTop() > 80) {
					nav.addClass('scrolled');
				} else {
					nav.removeClass('scrolled');
				}

			});

			// Trigger the scroll listener on page load
			
			win.scroll();

			$('#mytext').css({opacity:0,marginLeft : -15}).delay(300).animate({opacity:1,marginLeft:0})
		});
