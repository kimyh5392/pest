(function($){
    // quick-banner
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 500) {
            $('.quick-banner').stop().animate({
                top: $(this).scrollTop() + 200
            }, 'slow');
        } else {
            $('.quick-banner').stop().animate({
                top: 374
            }, 'slow');
        }
    });
})(jQuery);