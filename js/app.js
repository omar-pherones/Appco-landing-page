window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// testimonil
$('.testimonialContainer').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplaySpeed: 2000,
    navSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
        },
    },
});

// video section
$('#play-video').on('click', function (e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $('#video-overlay').append(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
    );
});

$('.video-overlay, .video-overlay-close').on('click', function (e) {
    e.preventDefault();
    close_video();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        close_video();
    }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
}

// screen shot
$('.screen-sliders').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,
            margin: 30,
        },
        778: {
            items: 3,
            nav: false,
            margin: 20,
        },

        1200: {
            items: 5,
            margin: 20,
            loop: true,
        },
    },
});
$('.partners_container').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
            nav: false,
        },
        576: {
            items: 3,
            nav: false,
            margin: 20,
        },
        1000: {
            items: 6,
            margin: 30,
            loop: true,
        },
    },
});

AOS.init();
