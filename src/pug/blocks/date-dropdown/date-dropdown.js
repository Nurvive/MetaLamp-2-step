
import './date-dropdown-kit/date-dropdown.scss'
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker'
$().ready(function () {
    $('.date-dropdown-input').datepicker({
        onShow: function (inst, animationCompleted) {
            $('#date-dropdown').addClass('date-dropdown_active')
        },
        onHide: function (inst, animationCompleted) {
            $('#date-dropdown').removeClass('date-dropdown_active')
        },
    })
})
