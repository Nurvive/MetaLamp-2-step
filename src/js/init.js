import LikeButton from '../blocks/like-button/like-button';
import MaskedTextField from '../blocks/masked-text-field/masked-text-field';
import ExpandableCheckboxList from '../blocks/expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../blocks/pagination/pagination';
import RangeSlider from '../blocks/range-slider/range-slider';
import RoomCard from '../blocks/room-card/room-card';
import Header from '../blocks/header/header';
import Canvas from '../blocks/canvas/canvas';
import DateDropdown from '../blocks/date-dropdown/date-dropdown';

$(() => {
    $('.js-like-button').each((_, element) => new LikeButton(element));
    $('.js-masked-text-field input').each((_, element) => new MaskedTextField(element));
    $('.js-expandable-checkbox__open-button').each((_, element) => new ExpandableCheckboxList(element));
    $('.js-pagination').each((_, element) => new Pagination(element));
    $('.js-range-slider').each((_, element) => new RangeSlider(element));
    $('.js-room-card__top').each((_, element) => new RoomCard(element));
    $('.js-header').each((_, element) => new Header(element));
    $('.js-canvas__area').each((_, element) => new Canvas(element));
    $('.js-date-dropdown').each((_, element) => new DateDropdown(element));
});
