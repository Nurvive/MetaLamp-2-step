import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

class RoomCard {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        this.element.slick({
            dots: true,
            prevArrow: '<button class="room-card__arrow room-card__arrow_prev fas fa-chevron-left"></button>',
            nextArrow: '<button class="room-card__arrow room-card__arrow_next fas fa-chevron-right"></button>',
            dotsClass: 'room-card__dots'
        });
    }
}

export default RoomCard;
