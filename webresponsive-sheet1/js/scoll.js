$(function() {
	    var topBtn = $('#page-top');   
	    topBtn.hide();
	    //ƒXƒNƒ[ƒ‹‚ª100‚É’B‚µ‚½‚çƒ{ƒ^ƒ“•\Ž¦
	    $(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            topBtn.fadeIn();
	        } else {
	            topBtn.fadeOut();
	        }
	    });
	    //ƒXƒNƒ[ƒ‹‚µ‚Äƒgƒbƒv
	    topBtn.click(function () {
	        $('body,html').animate({
	            scrollTop: 0
	        }, 500);
	        return false;
	    });
		
});

