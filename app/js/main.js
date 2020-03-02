  jQuery(function($) {

    $('.slick__items').slick({
        speed: 1000,
				slidesToShow: 1,
				dots: true,
				dotsClass: 'slick-dots',
				infinite: true,
				fade: true,
				cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
    });

    
    $('.header__menu-btn').on('click', function(){
        $('.header__menu > ul').slideToggle();
    });



});