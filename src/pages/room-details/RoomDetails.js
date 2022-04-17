import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import Header from '../../blocks/header/header';
import Canvas from '../../blocks/canvas/canvas';
import Comment from '../../blocks/comment/comment';
import Reservation from '../../blocks/reservation/Reservation';

class RoomDetails {
    constructor(root) {
        this.$root = $(root);
        this.init();
    }

    init() {
        this.$root.parent().each((_, element) => new Header(element));
        this.$root.find('.js-room-details__canvas-wrapper').each((_, element) => new Canvas(element));
        this.$root.find('.js-room-details__reviews').each((_, element) => new Comment(element));
        this.$root.find('.js-room-details__reservation-wrapper').each((_, element) => new Reservation(element));
        RoomDetails.setup();
    }

    static setup() {
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
    }
}

export {RoomDetails};
