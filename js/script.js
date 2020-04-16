$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navClass: ['slider-prev', 'slider-next'],
        stageClass: ['slider-main'],
        responsive: {
            0: {
                items: 1,
                center: true,
                autoplay: true,
                animateIn: true
            },

            578: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});