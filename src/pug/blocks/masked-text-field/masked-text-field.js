import './masked-text-field.pug'
import './masked-text-field-kit/masked-text-field.scss'
import $ from 'jquery'
import IMask from 'imask';
$().ready(function () {
    IMask(
        document.getElementById('masked-text-field'),
        {
            mask: Date,
            blocks: {
                d: {mask: IMask.MaskedRange, placeholderChar: 'ДД', from: 1, to: 31, maxLength: 2},
                m: {mask: IMask.MaskedRange, placeholderChar: 'ММ', from: 1, to: 12, maxLength: 2},
                Y: {mask: IMask.MaskedRange, placeholderChar: 'ГГГГ', from: 1900, to: 2999, maxLength: 4}
            }
        });
})
