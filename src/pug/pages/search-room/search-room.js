import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import './search-room.scss';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import Pagination from '../../blocks/pagination/pagination';

$().ready(() => {
    let width = ($(window).width());
    let $moveObjects = $('li.search-room__item:not([data-move="no"])');
    if (width < 900) $moveObjects.detach().appendTo('.small-menu__content');

    $(window).resize(function () {
        width = ($(this).width());
        if (width < 900) $moveObjects.detach().appendTo('.small-menu__content');
        else {
            $moveObjects.detach().appendTo('.search-room__list');
        }
    });
    $('.small-menu__content *:not(.dropdown__input-wrapper, .dropdown__open-button, .dropdown__input)').on('click', function (e) {
        e.stopPropagation();
    });
    $('.small-menu-title').on('click', function () {
        $(this).parent().children(':not(.search-room__layout)').toggle(100);
    });

    $('.js-search-room-slider__slider').ionRangeSlider({
        skin: 'round',
        min: 0,
        type: 'double',
        max: 10000,
        from: 2000,
        to: 5000,
        step: 20,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function (data) {
            $('.js-search-room-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
        },
        onChange: function (data) {
            $('.js-search-room-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
        }
    });
});

// eslint-disable-next-line no-unused-vars
const list = new ExpandableCheckboxList('.js-search-room-expandable-checkbox__button');
// eslint-disable-next-line no-unused-vars
const pagination = new Pagination('.js-search-room-pagination');
