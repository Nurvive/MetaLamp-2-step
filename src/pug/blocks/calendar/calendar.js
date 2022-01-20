import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.min.css';
import './calendar.scss';

$('.js-calendar__inner').datepicker({
    classes: 'calendar-datepicker',
    range: true,
    navTitles: {
        days: 'MM yyyy'
    }
});
