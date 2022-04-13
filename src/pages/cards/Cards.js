import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import RoomCard from '../../blocks/room-card/room-card';
import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';

class Cards {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.find('.js-date-dropdown').each((_, element) => new DateDropdown(element));
        this.root.find('.js-room-card__top').each((_, element) => new RoomCard(element));
        this.root.find('.js-masked-text-field input').each((_, element) => new MaskedTextField(element));
        this.root.find('.js-dropdown-default').each((_, element) => {
            new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', [1, 10, 1], 'дети', [0, 8, 0], 'младенцы', [0, 5, 0]]);
        });
    }
}

export {Cards};
