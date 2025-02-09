(function($) {
    function startAnimation() {
        const images = $('.image-item');
        const numImages = images.length;
        const duration = 12000; // Slower rotation
        const spacing = (2 * Math.PI) / numImages;

        $('#final-image').css({ opacity: 0 });

        function animateImages() {
            const containerWidth = $('#animation-container').width();
            const containerHeight = $('#animation-container').height();
            const centerX = containerWidth * 0.75; // 75% of the container width to position it in the right half
            const centerY = containerHeight / 2; // Vertically center the animation
            const radius = Math.min(containerWidth, containerHeight) / 4; // Adjust radius to fit in the right half

            images.each(function(index) {
                const image = $(this);
                image.css({ left: centerX - 50, top: centerY - 50, opacity: 1 });

                setTimeout(function() {
                    const startAngle = index * spacing;

                    $({ angle: startAngle }).animate({ angle: startAngle + (2 * Math.PI) }, {
                        duration: duration,
                        step: function(now) {
                            const x = centerX + radius * Math.cos(now);
                            const y = centerY + radius * Math.sin(now);
                            image.css({ left: x + 'px', top: y + 'px' });
                        },
                        easing: 'linear',
                        complete: function() {
                            image.animate({
                                left: centerX + 'px',
                                top: centerY + 'px',
                                width: '120px',
                                height: '120px',
                                opacity: 0
                            }, 2000);
                        }
                    });
                }, index * 500);
            });
        }

        // Initial animation start
        animateImages();

        // Recalculate on window resize to ensure animation stays within bounds
        $(window).resize(function() {
            animateImages();
        });
    }

    $(document).ready(function() {
        startAnimation();
    });
})(jQuery);
