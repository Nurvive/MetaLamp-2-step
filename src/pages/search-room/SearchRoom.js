import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import Header from '../../blocks/header/Header';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';
import RoomCard from '../../blocks/room-card/RoomCard';
import DateDropdown from '../../blocks/date-dropdown/DateDropdown';
import RangeSlider from '../../blocks/range-slider/RangeSlider';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/ExpandableCheckboxList';
import Pagination from '../../blocks/pagination/Pagination';

class SearchRoom {
    constructor(root) {
        this.$root = $(root);
        this.init();
    }

    init() {
        this.$root.parent().each((_, element) => new Header(element));
        this.$root.find('.js-search-room__content').each((_, element) => new RoomCard(element));
        this.$root.find('.js-search-room__dropdown-layout-date-dropdown').each((_, element) => new DateDropdown(element));
        this.$root.find('.js-search-room__item-range-slider').each((_, element) => new RangeSlider(element));
        this.$root.find('.js-search-room__layout-expandable-checkbox').each((_, element) => new ExpandableCheckboxList(element));
        this.$root.find('.js-search-room__pagination-wrapper').each((_, element) => new Pagination(element));
        this.$root.find('.js-search-room__item-dropdown').each((_, element) => {
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
        this.$root.find('.js-search-room__dropdown-layout').each((_, element) => {
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
        SearchRoom.setup();
    }

    static setup() {
        function handleSmallMenuClick(e) {
            $(e.currentTarget).parent().children(':not(.search-room__layout)').toggle(100);
        }

        const handleWindowResize = ($moveObjects) => (e) => {
            const width = $(e.currentTarget).width();
            if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');
            else {
                $moveObjects.detach().appendTo('.search-room__list');
            }
        };

        $().ready(() => {
            let width = ($(window).width());
            let $moveObjects = $('li.js-search-room__item:not([data-move="no"])');
            if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');
            $(window).resize(handleWindowResize($moveObjects));
            $('.js-search-room__small-menu > *[data-attr="small-menu-title"]').on('click', handleSmallMenuClick);
        });
    }
}

export {SearchRoom};
