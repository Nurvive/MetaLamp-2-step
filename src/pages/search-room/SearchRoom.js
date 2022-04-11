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
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.parent().find('.js-header').each((_, element) => new Header(element));
        this.root.find('.js-room-card__top').each((_, element) => new RoomCard(element));
        this.root.find('.js-date-dropdown').each((_, element) => new DateDropdown(element));
        this.root.find('.js-range-slider').each((_, element) => new RangeSlider(element));
        this.root.find('.js-expandable-checkbox').each((_, element) => new ExpandableCheckboxList(element));
        this.root.find('.js-pagination').each((_, element) => new Pagination(element));
        this.root.find('.js-dropdown-rooms').each((_, element) => {
            return new Dropdown(element, [
                ['спальня', 'спальни', 'спален'],
                ['кровать', 'кровати', 'кроватей'],
                ['ванная комната', 'ванные комнаты', 'ванных комнат']
            ], dropdownTypes.separate, false, ['спальни', 'кровати', 'ванные комнаты']);
        });
        this.root.find('.js-dropdown-default').each((_, element) => {
            return new Dropdown(element, [
                ['гость', 'гостя', 'гостей'],
                ['младенец', 'младенца', 'младенцев']
            ], dropdownTypes.default, true, ['взрослые', 'дети', 'младенцы']);
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
