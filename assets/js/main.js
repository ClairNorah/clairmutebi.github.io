/*
    Miniport by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: [null, '736px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height(); }
    });

    // On page load, initialize the animations
    $(document).ready(function() {
        // Step 1: Fade in the images one by one at specific positions
        setTimeout(function() {
            $('#coding').addClass('animate');
        }, 1000);

        setTimeout(function() {
            $('#family').addClass('animate');
        }, 2000);

        setTimeout(function() {
            $('#friends').addClass('animate');
        }, 3000);

        setTimeout(function() {
            $('#singing').addClass('animate');
        }, 4000);

        setTimeout(function() {
            $('#drawing').addClass('animate');
        }, 5000);

        // Step 2: After images are visible, start rotating them in a circle
        setTimeout(function() {
            $('.image-item').addClass('rotate');
        }, 6000);

        // Step 3: After rotation, animate the images to the center to form the final image
        setTimeout(function() {
            $('.image-item').each(function(index) {
                $(this).animate({
                    left: '50%',
                    top: '50%',
                    marginLeft: '-60px', // Adjust to center the images
                    marginTop: '-60px'
                }, 2000 + index * 1000);
            });

            // Step 4: After images converge, fade in the final image
            $('#final-image').addClass('fade-in');
        }, 10000);
    });

})(jQuery);
