import './reservation-kit/reservation.scss'

$().ready(function () {
    let $start = $('#reservation__date-dropdown_start'),
        $end = $('#reservation__date-dropdown_end');

    $start.datepicker({
        onSelect: function (fd, d, picker) {
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        }
    })
})


