import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import Header from '../../blocks/header/header';
import Canvas from '../../blocks/canvas/canvas';
import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';
import LikeButton from '../../blocks/like-button/like-button';

class RoomDetails {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.parent().find('.js-header').each((_, element) => new Header(element));
        this.root.find('.js-canvas__area').each((_, element) => new Canvas(element));
        this.root.find('.js-date-dropdown').each((_, element) => new DateDropdown(element));
        this.root.find('.js-like-button').each((_, element) => new LikeButton(element));
        this.root.find('.js-dropdown-default').each((_, element) => {
            new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', [1, 10, 1], 'дети', [0, 8, 0], 'младенцы', [0, 5, 0]]);
        });
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
