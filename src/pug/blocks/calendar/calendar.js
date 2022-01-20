import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
// eslint-disable-next-line no-unused-vars
const picker = new AirDatepicker('.js-calendar__inner', {
    classes: 'calendar-datepicker',
    range: true,
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
