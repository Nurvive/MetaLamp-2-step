import LikeButton from '../pug/blocks/like-button/like-button';
import MaskedTextField from '../pug/blocks/masked-text-field/masked-text-field';
import ExpandableCheckboxList from '../pug/blocks/expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../pug/blocks/pagination/pagination';
import RangeSlider from '../pug/blocks/range-slider/range-slider';
import RoomCard from '../pug/blocks/room-card/room-card';
import Header from '../pug/blocks/header/header';
import Canvas from '../pug/blocks/canvas/canvas';

$(() => {
    $('.js-like-button').each((_, element) => {
        new LikeButton(element);
    });
    $('.js-masked-text-field input').each((_, element) => {
        new MaskedTextField(element);
    });
    $('.js-expandable-checkbox__open-button').each((_, element) => {
        new ExpandableCheckboxList(element);
    });
    $('.js-pagination').each((_, element) => {
        new Pagination(element);
    });
    $('.js-range-slider').each((_, element) => {
        new RangeSlider(element);
    });
    $('.room-card__top').each((_, element) => {
        new RoomCard(element);
    });
    $('.js-header__menu-dropdown').each((_, element) => {
        new Header(element);
    });
    $('.js-canvas__area').each((_, element) => {
        new Canvas(element);
    });
});
