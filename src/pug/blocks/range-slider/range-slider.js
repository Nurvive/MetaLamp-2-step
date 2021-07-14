import './range-slider.pug'
import './range-slider-kit/range-slider.scss'
// import 'jquery'
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
$(".range-slider__slider").ionRangeSlider({
    skin: "round",
    min: 0,
    type:'double',
    max: 10000,
    from: 2000,
    to: 5000,
    step:20,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
        $('.range-slider__count').text(this.from + ' - ' +this.to)
    },
    onChange: function (data){
        $('.range-slider__count').text(data.from + ' - ' +data.to)
    }
});
