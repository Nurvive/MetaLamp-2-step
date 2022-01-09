import './date-dropdown-kit/date-dropdown.scss';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

$().ready(function () {
    $('.js-date-dropdown-input').datepicker({
        classes: 'toggle-datepicker',
        onShow: function (e) {
            $(e.el.parentNode).addClass('date-dropdown_active');
        },
        onHide: function (e) {
            $(e.el.parentNode).removeClass('date-dropdown_active');
        },
        position: 'bottom center'
    });
});
