(function ($) {
    "use strict";
    $(document).ready(function ($) {

        // hero-slider
        $(".hero-area").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
           
        });

        // hero-slider
        $(".sponsors-content").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            navText: ["<img src='assets/img/icons/arrow-left-angle.png'>", "<img src='assets/img/icons/arrow-right-angle.png'>"],
            dots: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            margin:70,
            autoplay:true
        });

        // nice-select
        $(document).ready(function () {
            $('select').niceSelect();
        });





    });


    $(window).on('load', function () {});
}(jQuery));