import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import RoomCard from '../../blocks/room-card/room-card';
import FindRoom from '../../blocks/find-room/FindRoom';
import Registration from '../../blocks/registration/Registration';
import Reservation from '../../blocks/reservation/Reservation';

class Cards {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.find('.js-cards__item-first').each((_, element) => {
            new FindRoom(element);
            new Registration(element);
        });
        this.root.find('.js-cards__item-second').each((_, element) => {
            new Reservation(element);
        });
        this.root.find('.js-cards__item-third').each((_, element) => new DateDropdown(element));
        this.root.find('.js-cards__item-third').each((_, element) => new RoomCard(element));
    }
}

export {Cards};
