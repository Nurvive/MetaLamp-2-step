import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import RoomCard from '../../blocks/room-card/room-card';
import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/dropdown-kit/Dropdown';

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
            return new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', 'дети', 'младенцы']);
        });
    }
}

export {Cards};
