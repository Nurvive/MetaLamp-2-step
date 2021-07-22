import './reservation-kit/reservation.scss'

$().ready(function () {
    let $start = $('#reservation__date-dropdown_start'),
        $end = $('#reservation__date-dropdown_end');

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



