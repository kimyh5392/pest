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
    
    // accordion
    $(document).on('click', '.btn-collapse', function(e){
        $(this).parent().toggleClass('active');
        $(this).closest('li').find('.answer').not(':animated').slideToggle();
        e.preventDefault();
    });
    
    // modify-drop
    $(document).on('click', '.btn-drop-more', function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('show');
    });
    $(document).click(function(){
        $('.drop-area').removeClass('show');
    });
    
    
    
    // datepicker
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
    $(function(){
        $('.date-pick').datepicker();
    });
})(jQuery);