import './reservation-kit/reservation-media.scss';

$().ready(function () {
    let $start = $('#reservation__date-dropdown_start');
    let $end = $('#reservation__date-dropdown_end');

    $start.datepicker({
        onSelect: function (fd) {
            $start.val(fd.split('-')[0]);
            $end.val(fd.split('-')[1]);
        }
    });
});
