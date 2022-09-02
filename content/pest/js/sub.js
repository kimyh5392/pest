(function($){
    // quick-banner
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 500) { // 작업시 css와 함께 수정해야함
            $('.quick-banner').stop().animate({
                top: $(this).scrollTop() + 200
            }, 'slow');
        } else {
            $('.quick-banner').stop().animate({
                top: 727  // 작업시 css와 함께 수정해야함
            }, 'slow');
        }
    });
})(jQuery);