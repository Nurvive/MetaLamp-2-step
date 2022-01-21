import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './form-elements-kit/form-elements.scss';
import './form-elements.pug';

const inputStart = document.querySelector('.js-form-elements__date-dropdown_start');
const inputEnd = document.querySelector('.js-form-elements__date-dropdown_end');
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

const input2 = document.querySelector('.js-form-elements__filter-date-dropdown_start');
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
