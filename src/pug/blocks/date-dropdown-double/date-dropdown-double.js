import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './date-dropdown-double.scss';

const inputsStart = document.querySelectorAll('.js-date-dropdown-double_start');
const inputsEnd = document.querySelectorAll('.js-date-dropdown-double_end');

for (let i = 0; i < inputsStart.length; i += 1) {
    const picker = new AirDatepicker(inputsStart[i], {
        multipleDates: true,
        range: true,
        onSelect(fd) {
            inputsStart[i].value = fd.formattedDate[0] ? fd.formattedDate[0] : '';
            inputsEnd[i].value = fd.formattedDate[1] ? fd.formattedDate[1] : '';
        },
        onShow: function () {
            inputsStart[i].parentNode.classList.add('date-dropdown__input_active');
            inputsEnd[i].parentNode.classList.add('date-dropdown__input_active');
        },
        onHide: function () {
            inputsStart[i].parentNode.classList.remove('date-dropdown__input_active');
            inputsEnd[i].parentNode.classList.remove('date-dropdown__input_active');
        },
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
        startDate: new Date()
    });

    inputsEnd[i]?.addEventListener('click', function () {
        picker.show();
    });
}
