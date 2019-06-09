$('.carousel-wrapper').slick({
    vertical: true,
    verticalSwiping: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-up" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-down" aria-hidden="true"></i></button>',
});

$('.main-caurusel-wrapper').slick();

$('.burger').click(function() {
    $('.border-nav-container').toggleClass('active');
    $('.burger').toggleClass('active');
});

var v = document.getElementById("video");
v.onclick = function() {
    if (v.paused) {
        v.play();

    } else {
        v.pause();
    }
};