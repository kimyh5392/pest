(function($){
    $(document).ready(function(){
        // jumbo-slider
        $('.jumbo-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            prevArrow: "<button type='button' class='slick-prev'><img src='/content/pest/images/main/img_slick_prev.png' alt=''></button>",
            nextArrow: "<button type='button' class='slick-next'><img src='/content/pest/images/main/img_slick_next.png' alt=''></button>",
        });

        // product-slider
        $('.product-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            arrows: true,
        });

        // item-slider
        $('.item-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            arrows: true,
        });
    });
    setTimeout(function(){
        $('.jumbotron').addClass('show');
    });
})(jQuery);