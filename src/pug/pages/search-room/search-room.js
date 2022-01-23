import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import './search-room.scss';

const input = document.querySelector('.js-search-room__filter-date-dropdown_start');
// eslint-disable-next-line no-unused-vars
const picker = new AirDatepicker('.js-search-room__filter-date-dropdown_start', {
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    onShow: function () {
        input.parentNode.classList.add('date-dropdown__input_active');
    },
    onHide: function () {
        input.parentNode.classList.remove('date-dropdown__input_active');
    },
    dateFormat: 'dd.MMM',
    buttons: ['clear', 'today'],
    locale: {
        today: 'Применить'
    },
    prevHtml: '<span class="arrow air-datepicker__arrow air-datepicker__arrow_left"></span>',
    nextHtml: '<span class="arrow air-datepicker__arrow"></span>',
    navTitles: {
        days: 'MMMM yyyy'
    },
    startDate: new Date()
});

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
