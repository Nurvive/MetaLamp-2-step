
import './filter-date-dropdown-kit/filter-date-dropdown.scss'
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker'
$().ready(function () {
    $('.filter-date-dropdown-input').datepicker({
        range:true,
        multipleDatesSeparator: ' - ',
        dateFormat:'dd M',
        onShow: function (inst, animationCompleted) {
            $('#filter-date-dropdown').addClass('filter-date-dropdown_active')
        },
        onHide: function (inst, animationCompleted) {
            $('#filter-date-dropdown').removeClass('filter-date-dropdown_active')
        },
    })
})
