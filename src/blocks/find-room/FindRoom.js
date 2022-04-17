import DateDropdown from '../date-dropdown/date-dropdown';
import dropdownTypes, {Dropdown} from '../dropdown/Dropdown';

class FindRoom {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.$component = $(root).find('.js-find-room');
        this.$component.find('.js-find-room__dates-date-dropdown').each((_, element) => new DateDropdown(element));
        this.$component.find('.js-find-room__layout-dropdown').each((_, element) => {
            new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', [1, 10, 1], 'дети', [0, 8, 0], 'младенцы', [0, 5, 0]]);
        });
    }
}

export default FindRoom;
