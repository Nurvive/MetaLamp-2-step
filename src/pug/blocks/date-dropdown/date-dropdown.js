import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './date-dropdown.scss';

// $().ready(function () {
//     $('.js-date-dropdown-input').datepicker({
//         classes: 'toggle-datepicker',
//         onShow: function (e) {
//             $(e.el.parentNode).addClass('date-dropdown_active');
//         },
//         onHide: function (e) {
//             $(e.el.parentNode).removeClass('date-dropdown_active');
//         },
//         position: 'bottom center',
//         buttons: ['clear', 'today'],
//         locale: {
//             today: 'Применить'
//         }
//     });
// });
// const inputStart = document.querySelector('.find-room__date-dropdown_start');
// const inputEnd = document.querySelector('.find-room__date-dropdown_end');
//
// const picker = new AirDatepicker('.find-room__date-dropdown_start', {
//     classes: 'toggle-datepicker',
//     onShow: function (e) {
//         $(e.el.parentNode).addClass('date-dropdown_active');
//     },
//     onHide: function (e) {
//         $(e.el.parentNode).removeClass('date-dropdown_active');
//     },
//     range: true,
//     buttons: ['clear', 'today'],
//     locale: {
//         today: 'Применить'
//     },
//     prevHtml: '<i class="fas fa-arrow-left"></i>',
//     nextHtml: '<i class="fas fa-arrow-right"></i>',
//     navTitles: {
//         days: 'MMMM yyyy'
//     },
//     startDate: new Date()
// });
