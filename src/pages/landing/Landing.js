import Header from '../../blocks/header/header';
import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';

class Landing {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.parent().find('.js-header').each((_, element) => new Header(element));
        this.root.find('.js-date-dropdown').each((_, element) => new DateDropdown(element));
        this.root.find('.js-dropdown-default').each((_, element) => {
            new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', [1, 10, 1], 'дети', [0, 8, 0], 'младенцы', [0, 5, 0]]);
        });
    }
}

export {Landing};
