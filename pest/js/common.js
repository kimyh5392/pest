(function($){
    // gnb nav 관련
    $(document).on('mouseenter', '.gnb-menu > li > a', function(){
        $('.gnb-menu > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '.gnb-menu', function(){
        $('.gnb-menu > li').removeClass('active');
    });
})(jQuery);