import DateDropdown from '../../blocks/date-dropdown/DateDropdown';
import MaskedTextField from '../../blocks/masked-text-field/MaskedTextField';
import LikeButton from '../../blocks/like-button/LikeButton';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/ExpandableCheckboxList';
import Pagination from '../../blocks/pagination/Pagination';
import RangeSlider from '../../blocks/range-slider/RangeSlider';
import Comment from '../../blocks/comment/Comment';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';

class FormElements {
    constructor(root) {
        this.$root = $(root);
        this.init();
    }

    init() {
        this.$root.find('.js-form-elements__label-date-dropdown-double').each((_, element) => new DateDropdown(element));
        this.$root.find('.js-form-elements__label-date-dropdown-single').each((_, element) => new DateDropdown(element));
        this.$root.find('.js-form-elements__label-masked-text-field').each((_, element) => new MaskedTextField(element));
        this.$root.find('.js-form-elements__label-inner-like').each((_, element) => new LikeButton(element));
        this.$root.find('.js-form-elements__low-container').each((_, element) => new Comment(element));
        this.$root.find('.js-form-elements__label-expandable-checkbox').each((_, element) => new ExpandableCheckboxList(element));
        this.$root.find('.js-form-elements__label-pagination').each((_, element) => new Pagination(element));
        this.$root.find('.js-form-elements__label-range-slider').each((_, element) => new RangeSlider(element));
        this.$root.find('.js-form-elements__label-dropdown-default').each((_, element) => {
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

        this.$root.find('.js-form-elements__label-dropdown-rooms').each((_, element) => {
            new Dropdown(element, [
                ['спальня', 'спальни', 'спален'],
                ['кровать', 'кровати', 'кроватей'],
                ['ванная комната', 'ванные комнаты', 'ванных комнат']
            ], dropdownTypes.separate, false, [{
                word: 'спальни',
                min: 1,
                max: 8,
                current: 2
            }, {
                word: 'кровати',
                min: 1,
                max: 10,
                current: 1
            }, {
                word: 'ванные комнаты',
                min: 0,
                max: 10,
                current: 1
            }]);
        });
    }
}

export {FormElements};
