import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

function pickerClickHandler(picker) {
    picker?.show();
}

const inputs = document.querySelectorAll('.js-date-dropdown-double__input input');
for (let i = 0; i < inputs.length; i += 2) {
    const picker = new AirDatepicker(inputs[i], {
        multipleDates: true,
        range: true,
        onSelect(fd) {
            inputs[i].value = fd.formattedDate[0] ? fd.formattedDate[0] : '';
            inputs[i + 1].value = fd.formattedDate[1] ? fd.formattedDate[1] : '';
        },
        onShow: function () {
            inputs[i].parentNode.classList.add('date-dropdown__input_active');
            inputs[i + 1].parentNode.classList.add('date-dropdown__input_active');
        },
        onHide: function () {
            inputs[i].parentNode.classList.remove('date-dropdown__input_active');
            inputs[i + 1].parentNode.classList.remove('date-dropdown__input_active');
        },
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

    inputs[i + 1]?.addEventListener('click', () => pickerClickHandler(picker));
}
