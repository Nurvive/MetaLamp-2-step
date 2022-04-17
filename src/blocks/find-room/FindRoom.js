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
            ], dropdownTypes.default, true, [{
                word: 'взрослые',
                min: 1,
                max: 10,
                current: 1
            }, {
                word: 'дети',
                min: 0,
                max: 10,
                current: 1
            }, {
                word: 'младенцы',
                min: 0,
                max: 5,
                current: 0
            }]);
        });
    }
}

export default FindRoom;
