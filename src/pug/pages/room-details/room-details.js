import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

const $gallery = $('.js-room-details__gallery');
const $galleryImages = $gallery.children();
let slickExist = null;
$(window).resize(function () {
    const width = document.documentElement.clientWidth;
    if (width > 900 && slickExist) {
        $gallery.slick('unslick');
        $gallery.append($galleryImages);
        slickExist = false;
    } else if (width < 900 && !slickExist) {
        $gallery.slick({
            slidesToShow: 1,
            arrows: false
        });
    }
});

const handleGalleryInit = () => {
    slickExist = true;
};

$(document).ready(() => {
    $gallery.on('init', handleGalleryInit);
});
