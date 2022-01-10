import './find-room-kit/find-room.scss';
import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';

$().ready(function () {
    const $start = $('#find-room__date-dropdown_start');
    const $end = $('#find-room__date-dropdown_end');

    $start.datepicker({
        onSelect: function (fd) {
            $start.val(fd.split('-')[0]);
            $end.val(fd.split('-')[1]);
        }
    }).data('datepicker');
    let $picker = $('.datepickers-container .datepicker');
    $picker.append('<div class="text-buttons">'
        + '<div class="text-button"><div class="text-button__text">Очистить</div></div>'
        + '<div class="text-button"><div class="text-button__text">Применить</div></div>'
        + '</div>');
});
