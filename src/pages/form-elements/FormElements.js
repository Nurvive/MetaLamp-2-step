import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import LikeButton from '../../blocks/like-button/like-button';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../../blocks/pagination/pagination';
import RangeSlider from '../../blocks/range-slider/range-slider';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';

class FormElements {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.find('.js-date-dropdown').each((_, element) => new DateDropdown(element));
        this.root.find('.js-masked-text-field input').each((_, element) => new MaskedTextField(element));
        this.root.find('.js-like-button').each((_, element) => new LikeButton(element));
        this.root.find('.js-expandable-checkbox').each((_, element) => new ExpandableCheckboxList(element));
        this.root.find('.js-pagination').each((_, element) => new Pagination(element));
        this.root.find('.js-range-slider').each((_, element) => new RangeSlider(element));
        this.root.find('.js-dropdown-default').each((_, element) => {
            return new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', 'дети', 'младенцы']);
        });
        this.root.find('.js-dropdown-rooms').each((_, element) => {
            return new Dropdown(element, [
                ['спальня', 'спальни', 'спален'],
                ['кровать', 'кровати', 'кроватей'],
                ['ванная комната', 'ванные комнаты', 'ванных комнат']
            ], dropdownTypes.separate, false, ['спальни', 'кровати', 'ванные комнаты']);
        });
    }
}

export {FormElements};
