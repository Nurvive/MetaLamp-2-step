import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import './form-elements.scss';
import './form-elements.pug';
import ExpandableCheckboxList from '../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import Pagination from '../../blocks/pagination/pagination';

$('.js-form-elements-slider__slider').ionRangeSlider({
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
        $('.js-form-elements-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
    },
    onChange: function (data) {
        $('.js-form-elements-slider__count').text(`${data.from } ₽ - ${data.to} ₽`);
    }
});

// eslint-disable-next-line no-unused-vars
const list = new ExpandableCheckboxList('.js-form-elements-expandable-checkbox__button');
// eslint-disable-next-line no-unused-vars
const maskedTextField = new MaskedTextField('js-form-elements-masked-text-field');
// eslint-disable-next-line no-unused-vars
const pagination = new Pagination('.js-form-elements-pagination');
