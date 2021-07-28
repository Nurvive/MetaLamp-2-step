import './find-room-kit/find-room.scss'
import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css';

$().ready(function () {
    let $start = $('#find-room__date-dropdown_start'),
        $end = $('#find-room__date-dropdown_end');

    let pick = $start.datepicker({
        onSelect: function (fd, d, picker) {
            $start.val(fd.split("-")[0]);
            $end.val(fd.split("-")[1]);
        }
    }).data('datepicker')
    let pckr = $('.datepickers-container .datepicker')
    pckr.append('<div class="text-buttons">' +
        '<div class="text-button"><div class="text-button__text">Очистить</div></div>' +
        '<div class="text-button"><div class="text-button__text">Применить</div></div>' +
        '</div>')
})
