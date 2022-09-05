(function($){
    // gnb nav 관련
    $(document).on('mouseenter', '.gnb-menu > li > a', function(){
        $('.gnb-menu > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '.gnb-menu', function(){
        $('.gnb-menu > li').removeClass('active');
    });
    
    // tab menu 
    $('.tab-area').each(function(i) {
        var oTab = $(this);
        var tabIndex = $(this).find('.active').children().attr('href').match(/\d+$/);
        $(this).find('.tab-content').find('#tab-' + tabIndex[0]).addClass('active');
        $(this).find('.tab-menu > ul > li > a').click(function() {
            var tabIndex = $(this).attr('href').match(/\d+$/);
            oTab.find('.tab-menu > ul > li > a').parent().removeClass('active');
            $(this).parent().addClass('active');
            oTab.find('.tab-content .tab-pane').removeClass('active');
            oTab.find('.tab-content').find('#tab-' + tabIndex[0]).addClass('active');;
            return false;
        });
    });
    
    // dropdown
    $(document).ready(function() {
        //Open Drop Down
        $('.btn-drop').click(function (e) {
            e.preventDefault();
            if ($('.dropdown').hasClass('active')) {
                $('.dropdown').removeClass('active');
                $(this).parent().toggleClass('active');
            } else {
                $(this).parent().toggleClass('active');
            }
        });

        // On click get Current Selected tag Value
        $('.dropdown > ul > li > a').click(function (e) {
            $(this).parent().parent().siblings('.btn-drop').addClass('on');
            if ($('.dropdown').hasClass('active')) {
                var current_value = $(this).text();
                $('.dropdown').removeClass('active');
                $(this).parents('.dropdown').find('.btn-drop').text(current_value);
            }
        });

        // close when click on Body
        $('html').click(function (event) {
            if ($(event.target).closest('.btn-drop').length === 0) {
                $('.dropdown').removeClass('active');
            }
        });
    });
    
    // top-banner 
    $(document).on('click', '.btn-banner-close', function(){
        $('.top-banner').hide();
        $('body').addClass('banner-none');
    });
    
    // header scroll
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 124) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });
    
    // btn-quick-top
    $(document).on('click', '.btn-quick-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 727) {
            $('.quick-top').addClass('show');
        } else {
            $('.quick-top').removeClass('show');
        }
    });
})(jQuery);