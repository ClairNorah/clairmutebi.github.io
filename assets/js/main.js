(function ($) {
    function startAnimation() {
        const images = $('.image-item');
        const numImages = images.length;
        const duration = 12000; // Slower rotation
        const spacing = (2 * Math.PI) / numImages;

        function animateImages() {
            const container = $('#animation-container');
            const containerWidth = container.width();
            const containerHeight = container.height();
            const centerX = containerWidth / 2; // Center the images inside the container
            const centerY = containerHeight / 2;
            const radius = Math.min(containerWidth, containerHeight) / 3; // Ensure it stays inside

            images.each(function (index) {
                const image = $(this);
                image.css({ opacity: 1 });

                function rotateImage(startAngle) {
                    $({ angle: startAngle }).animate({ angle: startAngle + (2 * Math.PI) }, {
                        duration: duration,
                        step: function (now) {
                            const x = centerX + radius * Math.cos(now) - image.width() / 2;
                            const y = centerY + radius * Math.sin(now) - image.height() / 2;
                            image.css({ left: x + 'px', top: y + 'px' });
                        },
                        easing: 'linear',
                        complete: function () {
                            rotateImage(startAngle); // Restart animation continuously
                        }
                    });
                }

                setTimeout(() => {
                    rotateImage(index * spacing);
                }, index * 500);
            });
        }

        // Run animation on load
        animateImages();

        // Ensure animation adjusts when resizing the window
        $(window).resize(function () {
            images.stop(true); // Stop ongoing animations
            animateImages(); // Restart with new sizes
        });
    }

    $(document).ready(function () {
        startAnimation();
    });
})(jQuery);
