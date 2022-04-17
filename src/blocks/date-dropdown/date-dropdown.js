import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import tr from 'air-datepicker/locale/tr';

class DateDropdown {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.element = root.querySelector('.js-date-dropdown');
        this.inputs = this.element.querySelectorAll('.js-date-dropdown__input input');
        const isDouble = this.element.dataset.double === 'true';
        const isInline = this.element.dataset.inline === 'true';
        if (isDouble) {
            this.createDouble(this.inputs);
        } else if (isInline) {
            DateDropdown.createInline(this.inputs);
        } else {
            DateDropdown.createSingle(this.inputs);
        }
    }

    handleInputClick = () => {
        this.picker.inFocus = false;
        if (!this.picker.visible) {
            this.inputs[0].focus();
        }
    };

    createDouble(inputs) {
        this.picker = new AirDatepicker(inputs[0], {
            multipleDates: true,
            range: true,
            onSelect(fd) {
                inputs[0].value = fd.formattedDate[0] ? fd.formattedDate[0] : '';
                inputs[1].value = fd.formattedDate[1] ? fd.formattedDate[1] : '';
            },
            onShow: function () {
                inputs[0].parentNode.classList.add('date-dropdown-double__input_active');
                inputs[1].parentNode.classList.add('date-dropdown-double__input_active');
            },
            onHide: function () {
                inputs[0].parentNode.classList.remove('date-dropdown-double__input_active');
                inputs[1].parentNode.classList.remove('date-dropdown-double__input_active');
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
            startDate: new Date(),
            autoClose: true
        });
        inputs[1].addEventListener('click', this.handleInputClick);
    }

    static createSingle(inputs) {
        const input = inputs[0];
        new AirDatepicker(input, {
            multipleDates: true,
            range: true,
            onSelect(fd) {
                if (Array.isArray(fd.formattedDate)) {
                    return;
                }
                const date = fd.formattedDate.split(',');
                input.value = date.length > 1 ? `${date[0].substr(0, date[0].length - 1)} - ${date[1].substr(0, date[0].length - 1)}` : `${date[0].substr(0, date[0].length - 1)}`;
            },
            onShow: function () {
                input.parentNode.classList.add('date-dropdown__input_active');
            },
            onHide: function () {
                input.parentNode.classList.remove('date-dropdown__input_active');
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

    static createInline(inputs) {
        const input = inputs[0];
        new AirDatepicker(input, {
            range: true,
            inline: true,
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
}

export default DateDropdown;
