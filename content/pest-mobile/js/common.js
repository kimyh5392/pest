(function($){
    
    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
    });
    $(document).on('click', '.btn-nav-close', function(){
        $('body').removeClass('opened');
    });
    
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
    
    // like btn
    $(document).on('click', '.btn-like', function(){
        $(this).toggleClass('on');
    });
    
    // 헤더 검색 관련
    $(document).on('click', '.btn-search-open', function(){
        $('.search-pop').addClass('show');
        $('body').addClass('show-modal');
    });
    $(document).on('click', '.btn-pop-close', function(){
        $('.search-pop').removeClass('show');
        $('body').removeClass('show-modal');
    });
    
    // sub-head
    $(window).on('scroll load resize', function() {
        if ($(this).scrollTop() > 0) {
            $('body').addClass('sub-header-fixed');
        } else {
            $('body').removeClass('sub-header-fixed');
        }
    });
})(jQuery);