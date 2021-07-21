import './find-room-kit/find-room.scss'
import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css';

$().ready(function () {
    let $start = $('#find-room__date-dropdown_start'),
        $end = $('#find-room__date-dropdown_end');

    $start.datepicker({
        onSelect: function (fd, date) {
            $end.data('datepicker')
                .update('minDate', date);

            $end.focus();
        }
    })
    $end.datepicker({
        onSelect: function (fd, date) {
            $start.data('datepicker')
                .update('maxDate', date)
        }
    })
})
