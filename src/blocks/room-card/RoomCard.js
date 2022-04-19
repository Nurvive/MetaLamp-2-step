import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

class RoomCard {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.$component = $(root).find('.js-room-card__top');
        this.$component.slick({
            dots: true,
            prevArrow: '<button class="room-card__arrow room-card__arrow_prev fas fa-chevron-left"></button>',
            nextArrow: '<button class="room-card__arrow room-card__arrow_next fas fa-chevron-right"></button>',
            dotsClass: 'room-card__dots'
        });
    }
}

export default RoomCard;
