(function($){
    
    // quick-link open 관련
    $(document).ready(function() {
        var lastScroll = 0;
        $(document).ready(function($) {
            $(window).scroll(function() {
            setTimeout(function() {
                var scroll = $(window).scrollTop();
                if (scroll > lastScroll) {
                    $('body').addClass('scrolled');
                } else if (scroll < lastScroll) {
                    $('body').removeClass('scrolled');
                }
                lastScroll = scroll;
                }, 100);
            });
        });
    });
    
    // quick-top
    $(document).on('click', '.btn-quick-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
    
    // tab menu 
    $('.tab-area').each(function(i) {
        var oTab = $(this);
        var tabIndex = $(this).find('.active').children().attr('href').match(/\d+$/);
        $(this).find('.tab-content').find('#tab-' + tabIndex[0]).addClass('active');
        $(this).find('.tab-menu li > a').click(function() {
            var tabIndex = $(this).attr('href').match(/\d+$/);
            oTab.find('.tab-menu li > a').parent().removeClass('active');
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
    
    // modal 
    $(document).on('click','.btn-modal', function(e){
        $('body').addClass('show-modal');
        $($(this).attr('href')).addClass('show');
        e.preventDefault();
    });
    $(document).on('click','.btn-msg-modal', function(e){
        $('body').addClass('show-modal');
        $('.modal-msg').addClass('show');
        e.preventDefault();
    });
    $(document).on('click','.btn-modal-close', function(e){
        $('body').removeClass('show-modal');
        $('.modal').removeClass('show');
    });
})(jQuery);