(function($){
    // top-banner 관련
    $(document).on('click', '.top-banner-close', function(){
        $(this).parent().hide();
        $('body').addClass('banner-none');
        bannerHeight = 0; // banner 값 초기화
        //console.log(bannerHeight); 
    });

    // banner 높이값
    var bannerHeight = $('.top-banner').height();
    //console.log(bannerHeight);

    // header scroll
    $(window).on('scroll load resize', function() {
        var headHeight = $('#header .top').height() + bannerHeight;
        if ($(this).scrollTop() > headHeight) {
            $('body').addClass('scroll');
        } else {
            $('body').removeClass('scroll');
        }
    });

    // gnb-menu
    $(document).on('click', '.gnb-menu > li > a', function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings('.active').removeClass('active');
            $(this).parent().addClass('active');
        }
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

})(jQuery);

// menu swiper
var swiper = new Swiper('.gnb-swiper', {
    slidesPerView: 'auto',
    freeMode: true,
});