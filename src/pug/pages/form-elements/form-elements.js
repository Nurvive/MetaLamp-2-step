import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import './form-elements.scss';
import './form-elements.pug';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import LikeButton from '../../blocks/like-button/like-button';
import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import Pagination from '../../blocks/pagination/pagination';

const inputStart = document.querySelector('.js-form-elements__date-dropdown_start');
const inputEnd = document.querySelector('.js-form-elements__date-dropdown_end');
const button = {
    content: 'Применить',
    onClick: (dp) => {
        dp.hide();
    }
};
// eslint-disable-next-line no-unused-vars
const picker1 = new AirDatepicker('.js-form-elements__date-dropdown_start', {
    multipleDates: true,
    range: true,
    onSelect(fd) {
        inputStart.value = fd.formattedDate[0] ? fd.formattedDate[0] : '';
        inputEnd.value = fd.formattedDate[1] ? fd.formattedDate[1] : '';
    },
    onShow: function () {
        inputStart.parentNode.classList.add('date-dropdown__input_active');
        inputEnd.parentNode.classList.add('date-dropdown__input_active');
    },
    onHide: function () {
        inputStart.parentNode.classList.remove('date-dropdown__input_active');
        inputEnd.parentNode.classList.remove('date-dropdown__input_active');
    },
    buttons: ['clear', button],
    prevHtml: '<span class="arrow air-datepicker__arrow air-datepicker__arrow_left"></span>',
    nextHtml: '<span class="arrow air-datepicker__arrow"></span>',
    navTitles: {
        days: 'MMMM yyyy'
    },
    startDate: new Date()
});

inputEnd?.addEventListener('click', function () {
    picker1.show();
});

const input2 = document.querySelector('.js-form-elements__filter-date-dropdown_start');
// eslint-disable-next-line no-unused-vars
const picker2 = new AirDatepicker('.js-form-elements__filter-date-dropdown_start', {
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    onShow: function () {
        input2.parentNode.classList.add('date-dropdown__input_active');
    },
    onHide: function () {
        input2.parentNode.classList.remove('date-dropdown__input_active');
    },
    dateFormat: 'dd MMM',
    buttons: ['clear', button],
    prevHtml: '<span class="arrow air-datepicker__arrow air-datepicker__arrow_left"></span>',
    nextHtml: '<span class="arrow air-datepicker__arrow"></span>',
    navTitles: {
        days: 'MMMM yyyy'
    },
    startDate: new Date(),
    autoClose: true

});

$('.js-form-elements-slider__slider').ionRangeSlider({
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
        $('.js-form-elements-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
    },
    onChange: function (data) {
        $('.js-form-elements-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
    }
});

// eslint-disable-next-line no-unused-vars
const list = new ExpandableCheckboxList('.js-form-elements-expandable-checkbox__button');
// eslint-disable-next-line no-unused-vars
const likeButton = new LikeButton('.js-form-elements-like-button');
// eslint-disable-next-line no-unused-vars
const maskedTextField = new MaskedTextField('js-form-elements-masked-text-field');
// eslint-disable-next-line no-unused-vars
const pagination = new Pagination('.js-form-elements-pagination');
