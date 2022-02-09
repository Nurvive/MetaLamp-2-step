import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

class RangeSlider {
    constructor(element) {
        this.element = $(element).children('.js-range-slider__slider');
        this.counter = $(element).children('.js-range-slider__count');
        this.init();
    }

    init() {
        this.element.ionRangeSlider({
            skin: 'round',
            min: 0,
            type: 'double',
            max: 10000,
            from: 2000,
            to: 5000,
            step: 20,
            hide_min_max: true,
            hide_from_to: true,
            onStart: function (data) {
                this.counter.text(`${data.from} ₽ - ${data.to} ₽`);
            }.bind(this),
            onChange: function (data) {
                this.counter.text(`${data.from} ₽ - ${data.to} ₽`);
            }.bind(this)
        });
    }
}

export default RangeSlider;
