import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import Header from '../../blocks/header/Header';
import Canvas from '../../blocks/canvas/Canvas';
import Comment from '../../blocks/comment/Comment';
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
        this.setup();
    }

    setup() {
        this.$gallery = $('.js-room-details__gallery');
        this.$galleryImages = this.$gallery.children();
        this.slickExist = null;
        $(window).resize(this.handleWindowResize);
        const handleGalleryInit = () => {
            this.slickExist = true;
        };
        $(document).ready(() => {
            this.handleWindowResize();
            this.$gallery.on('init', handleGalleryInit);
        });
    }

    handleWindowResize = () => {
        const width = document.documentElement.clientWidth;
        if (width > 900 && this.slickExist) {
            this.$gallery.slick('unslick');
            this.$gallery.append(this.$galleryImages);
            this.slickExist = false;
        } else if (width < 900 && !this.slickExist) {
            this.$gallery.slick({
                slidesToShow: 1,
                arrows: false
            });
        }
    };
}

export {RoomDetails};
