(function($){
    
    // accordion
    $(document).on('click', '.btn-collapse', function(e){
        $(this).parent().toggleClass('active');
        $(this).closest('li').find('.answer').not(':animated').slideToggle();
        e.preventDefault();
    });
    
    // search-form2 관련
    $(document).on('click', '.search-form2 > ul > li > a', function(){
        $('.search-form2 > ul > li').removeClass('active')
        $('.form-group.date').removeClass('show');
        $(this).parent().addClass('active');
    });
    $(document).on('click', '.date-setting > a', function(){
        $('.search-form2 > ul > li').removeClass('active')
        $(this).parent().addClass('active');
        $('.form-group.date').addClass('show');
    });
    
    // modify-drop
    $(document).on('click', '.btn-drop', function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('active');
    });
    $(document).click(function(){
        $('.dropdown').removeClass('active');
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