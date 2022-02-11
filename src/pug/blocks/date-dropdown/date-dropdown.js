import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const inputs = document.querySelectorAll('.js-date-dropdown__input input');
for (let i = 0; i < inputs.length; i += 1) {
    // eslint-disable-next-line no-new
    new AirDatepicker(inputs[i], {
        multipleDates: true,
        range: true,
        onSelect(fd) {
            const date = fd.formattedDate.split(',');
            inputs[i].value = date.length > 1 ? `${date[0].substr(0, date[0].length - 1)} - ${date[1].substr(0, date[0].length - 1)}` : `${date[0].substr(0, date[0].length - 1)}`;
        },
        onShow: function () {
            inputs[i].parentNode.classList.add('date-dropdown__input_active');
        },
        onHide: function () {
            inputs[i].parentNode.classList.remove('date-dropdown__input_active');
        },
        dateFormat(date) {
            return date.toLocaleString('ru', {
                day: '2-digit',
                month: 'short'
            });
        },
        multipleDatesSeparator: ' - ',
        buttons: ['clear', {
            content: 'Применить',
            onClick: (dp) => {
                dp.hide();
            }
        }],
        prevHtml: '<span class="air-datepicker__arrow air-datepicker__arrow_left"></span>',
        nextHtml: '<span class="air-datepicker__arrow"></span>',
        navTitles: {
            days: 'MMMM yyyy'
        },
        startDate: new Date()
    });
}
