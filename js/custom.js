jQuery(function ($) {
    "use strict";
    $(document).ready(function () {
        $(window).on("load", function() {
            let body        = $('body');
            let preloader 	= $('.preloader');
            let spinner 	= $('.spinner');

            if (preloader.length) {
                body.addClass("page-loaded");
                spinner.addClass("load-done");
                if(!spinner.hasClass('spinner-alt')){
                    spinner.fadeOut(300);
                }
                preloader.delay(600).fadeOut(300);
            }
        })
    });

    function menuFixed() {
        var wWidth = $(window).width();
        if (wWidth > 974) {
            if ($('#header, #header-2 .site-nav-inner').length) {
                var sticky = $('#header, #header-2 .site-nav-inner'), scroll = $(window).scrollTop();
                if (scroll >= 200) sticky.addClass('fixed'); else sticky.removeClass('fixed');
            }
            ;
        } else {
            if ($('.header-standard').length) {
                var sticky = $('.header-standard'), scroll = $(window).scrollTop();
                if (scroll >= 100) sticky.addClass('fixed'); else sticky.removeClass('fixed');
            }
            ;
        }
    }

    $(document).on('scroll', function () {
        menuFixed();
    });
    $('.home-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({scrollTop: 0}, 800);
        return false;
    });
    $('#back-to-top').tooltip('hide');
});
(function ($) {
    var defaults = {sm: 540, md: 720, lg: 960, xl: 1140, navbar_expand: 'lg', animation: true, animateIn: 'fadeIn',};
    $.fn.bootnavbar = function (options) {
        var screen_width = $(document).width();
        settings = $.extend(defaults, options);
        if (screen_width >= settings.lg) {
            $(this).find('.dropdown').hover(function () {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show');
                if (settings.animation) {
                    $(this).find('.dropdown-menu').first().addClass('animated ' + settings.animateIn);
                }
            }, function () {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            });
        }
        $('.dropdown-menu a').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            if ($(this).attr('href') == '#') {
                return false;
            } else {
                return true;
            }
        });
    };


})(jQuery);

