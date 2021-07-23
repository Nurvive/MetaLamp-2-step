import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'
import './calendar-kit/calendar.scss'
$('.calendar__inner').datepicker({
    classes:'calendar-datepicker',
    range:true,
    navTitles: {
        days: "MM yyyy",
    },

})



