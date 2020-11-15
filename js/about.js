$(document).ready(function () {

    'use strict';


    // ========================================================================= //
    // Responsive Hamburger Menu
    // ========================================================================= //

    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });

    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //

    $('.services-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //

    var magnifPopup = function () {
        $('.popup-img').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // Default = false

                duration: 300, // in milliseconds
                easing: 'ease-in-out',

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };

    magnifPopup();

});

// ========================================================================= //
//  Achievements isotope and filter
// ========================================================================= //
$(window).load(function () {

    var achievementsIsotope = $('.achievements-container').isotope({
        itemSelector: '.achievements-thumbnail',
        layoutMode: 'fitRows'
    });

    $('#achievements-flters li').on('click', function () {
        $("#achievements-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        achievementsIsotope.isotope({ filter: $(this).data('filter') });
    });

})

// ========================================================================= //
//  Timeline Tooltip Hover
// ========================================================================= //
$(document).ready(function () {
    var my_posts = $("[rel=tooltip]");
    for (i = 0; i < my_posts.length; i++) {
        the_post = $(my_posts[i]);
        if (the_post.hasClass('invert')) {
            the_post.tooltip({ placement: 'left' });
            the_post.css("cursor", "pointer");
        } else {
            the_post.tooltip({ placement: 'rigt' });
            the_post.css("cursor", "pointer");
        }
    }
});
