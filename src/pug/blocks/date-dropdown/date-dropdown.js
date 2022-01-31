import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './date-dropdown.scss';

const inputs = document.querySelectorAll('.js-date-dropdown_start');
for (let i = 0; i < inputs.length; i += 1) {
    // eslint-disable-next-line no-unused-vars
    const picker = new AirDatepicker(inputs[i], {
        multipleDates: true,
        range: true,
        multipleDatesSeparator: ' - ',
        onShow: function () {
            inputs[i].parentNode.classList.add('date-dropdown__input_active');
        },
        onHide: function () {
            inputs[i].parentNode.classList.remove('date-dropdown__input_active');
        },
        dateFormat: 'dd MMM',
        buttons: ['clear', {
            content: 'Применить',
            onClick: (dp) => {
                dp.hide();
            }
        }],
        prevHtml: '<span class="arrow air-datepicker__arrow air-datepicker__arrow_left"></span>',
        nextHtml: '<span class="arrow air-datepicker__arrow"></span>',
        navTitles: {
            days: 'MMMM yyyy'
        },
        startDate: new Date(),
        autoClose: true

    });
}
