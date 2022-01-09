import './date-dropdown-kit/date-dropdown.scss';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';
$().ready(function () {
    $('.date-dropdown-input').datepicker({
        classes: 'toggle-datepicker',
        onShow: function () {
            $(this).addClass('date-dropdown_active');
        },
        onHide: function () {
            $(this).removeClass('date-dropdown_active');
        },
        position: 'bottom center'
    });
});
