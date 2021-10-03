$(document).ready(function() {
    $(window).scroll(function() {

        if ($(this).scrollTop() > 10) {
            $('.nav-bar-change').addClass('active slideInDown');
            $('.top-head').css("display", "none");
            $('.nav-bar-change .navbar-brand .logo-1').addClass('fixed-logo');
            $('.nav-bar-change .navbar-brand .logo-2').removeClass('fixed-logo');





        } else {
            $('.nav-bar-change').removeClass('active');
            $('.top-head').css("display", "block");
            $('.nav-bar-change .navbar-brand .logo-1').removeClass('fixed-logo');
            $('.nav-bar-change .navbar-brand .logo-2').addClass('fixed-logo');



        }
    });

});
$(document).ready(function() {
    $('.carousel').carousel({
        interval: false,

    });
    $(".search-btn-link")
        .fancybox({
            padding: 0,
            smallBtn: false,
            toolbar: false,
        });
    $(".user-btn-link")
        .fancybox({
            padding: 0,
            smallBtn: false,
            toolbar: false,
        });
});
$(document).ready(function() {

    $('.owl-slider-div').owlCarousel({
        animateIn: 'fadeIn',
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplayHoverPause: false,
        autoplay: false,
        smartSpeed: 2000,
        singleItem: true,
        navText: [
            '<span class="carousel-btn left-btn"><i class="fal fa-arrow-left"></i> <span class="left">PR <br> EV</span></span>',
            '<span class="carousel-btn right-btn"><span class="right">NE <br> XT</span> <i class="fal fa-arrow-right"></i></span>'

        ],
        responsive: {
            768: {
                items: 1,
                dots: false
            },
        }

    })



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({

        asNavFor: '.slider-for',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerPadding: '1px',
        centerMode: true,
        focusOnSelect: false,
        variableWidth: true
    });
    $('.slider-nav-home4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        focusOnSelect: false,
        infinite: true,
    });
    $(".owl-blog-div").owlCarousel({
        items: 1,
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        smartSpeed: 2000,
        margin: 15,
        navText: [
            '<i class="fal fa-arrow-left"></i>',
            '<i class="fal fa-arrow-right"></i>'
        ],
    })

    $(".owl-blog-div_home4").owlCarousel({
        items: 3,
        autoplay: true,
        dots: false,
        nav: true,
        loop: true,
        smartSpeed: 2000,
        margin: 15,
        navText: [
            '<i class="fal fa-arrow-left"></i>',
            '<i class="fal fa-arrow-right"></i>'
        ],
    });
    $(".owl-blog-div_courses").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        rtl: false,
        autoplayHoverPause: false,
        autoplay: false,
        singleItem: true,
        smartSpeed: 1200,
        navText: [
            '<i class="fal fa-arrow-left"></i>',
            '<i class="fal fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480: {
                items: 1,
                center: false
            },
            520: {
                items: 1,
                center: false
            },
            600: {
                items: 2,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1366: {
                items: 4
            },
            1400: {
                items: 4

            }
        }
    });
    $(".owl-blog-div_team").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        rtl: false,
        autoplayHoverPause: false,
        autoplay: false,
        singleItem: true,
        smartSpeed: 1200,
        navText: [
            '<i class="fal fa-arrow-left"></i>',
            '<i class="fal fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480: {
                items: 1,
                center: false
            },
            520: {
                items: 2,
                center: false
            },
            600: {
                items: 2,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1366: {
                items: 5
            },
            1400: {
                items: 5
            }
        }
    });

    $(".scrollToTop").on("click", function() {
        $('body , html').animate({ scrollTop: 0 }, 800);
    });
    $(".mouse-scroll").on("click", function() {
        $('body , html').animate({ scrollTop: $('#courses-category').offset().top - 50 }, 1000);
    })

    $(".rslides").responsiveSlides({
        auto: true,
        speed: 500,
        timeout: 20000,
        nav: false,
        random: false,
        pause: false,
        namespace: "rslides"
    });


});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $(".scrollToTop").css("display", "block");

        } else {
            $(".scrollToTop").css("display", "none");

        }
    });
});
$(document).ready(function() {
    $('[data-toggle="slide-collapse"]').on('click', function() {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({ 'width': 'toggle' }, 480);
    });


});

// function responsiveLeftMenu() {
//     if ($(window).width() <= 991) {
//         jQuery('.navbar-nav > li > a, .sub-menu > li > a, .sub-menu2 > li > a').unbind().on('click', function(e) {
//             if ($(this).parent().hasClass('open')) {
//                 jQuery(this).parent().removeClass('open');
//             } else {
//                 jQuery(this).parent().parent().find('li').removeClass('open');
//                 jQuery(this).parent().addClass('open');
//             }
//         });
//     }
// }
// $(document).ready(function() {
//     $.fn.responsiveLeftMenu();

// });
// $(window).resize(function() {
//     $.fn.responsiveLeftMenu();

// });
$(document).ready(function() {
    if ($(window).width() <= 991) {
        jQuery('.navbar-nav > li > a, .sub-menu > li > a, .sub-menu2 > li > a').unbind().on('click', function(e) {
            if ($(this).parent().hasClass('open')) {
                jQuery(this).parent().removeClass('open');
            } else {
                jQuery(this).parent().parent().find('li').removeClass('open');
                jQuery(this).parent().addClass('open');
            }
        });
    }
});
$(window).resize(function() {
    if ($(window).width() <= 991) {
        jQuery('.navbar-nav > li > a, .sub-menu > li > a, .sub-menu2 > li > a').unbind().on('click', function(e) {
            if ($(this).parent().hasClass('open')) {
                jQuery(this).parent().removeClass('open');
            } else {
                jQuery(this).parent().parent().find('li').removeClass('open');
                jQuery(this).parent().addClass('open');
            }
        });
    }
});

$(document).ready(function() {
    $('.count').counterUp({
        delay: 5,
        time: 2000
    });
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        }
    });

});
$(document).ready(function() {
    $('.tags-bar > span i').on('click', function() {
        $(this).parent().fadeOut();
    });
});