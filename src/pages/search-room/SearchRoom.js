import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import Header from '../../blocks/header/header';
import dropdownTypes, {Dropdown} from '../../blocks/dropdown/Dropdown';
import RoomCard from '../../blocks/room-card/room-card';
import DateDropdown from '../../blocks/date-dropdown/date-dropdown';
import RangeSlider from '../../blocks/range-slider/range-slider';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../../blocks/pagination/pagination';

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
            ], dropdownTypes.separate, false, ['спальни', [1, 8, 2], 'кровати', [1, 10, 1], 'ванные комнаты', [0, 10, 1]]);
        });
        this.$root.find('.js-search-room__dropdown-layout').each((_, element) => {
            new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', [1, 10, 1], 'дети', [0, 8, 0], 'младенцы', [0, 5, 0]]);
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
