import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

class RangeSlider {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        const element = $(root).find('.js-range-slider');
        this.element = $(element).children('.js-range-slider__slider');
        this.counter = $(element).children('.js-range-slider__count');
        this.element.ionRangeSlider({
            skin: 'round',
            min: 0,
            type: 'double',
            max: 10000,
            from: 5000,
            to: 10000,
            step: 20,
            hide_min_max: true,
            hide_from_to: true,
            onStart: (data) => {
                this.counter.text(`${data.from} ₽ - ${data.to} ₽`);
            },
            onChange: (data) => {
                this.counter.text(`${data.from} ₽ - ${data.to} ₽`);
            }
        });
    }
}

export default RangeSlider;
