import './dropdown-kit/dropdown.scss';
import {DropdownRooms} from './dropdown-kit/DropdownRooms';
import {DropdownDefault} from './dropdown-kit/DropdownDefault';

(() => {
    document.querySelectorAll('.dropdown-default').forEach((node) => {
        // eslint-disable-next-line no-new
        new DropdownDefault(node, ['гость', 'гостя', 'гостей']);
    });
})();
(() => {
    document.querySelectorAll('.dropdown-rooms').forEach((node) => {
        // eslint-disable-next-line no-new
        new DropdownRooms(node, [
            ['спальня', 'спальни', 'спален'],
            ['кровать', 'кровати', 'кроватей'],
            ['ванная комната', 'ванные комнаты', 'ванных комнат']
        ]);
    });
})();
$().ready(function () {
    $('.dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).find('.dropdown__input').toggleClass('dropdown__input_active');
        $(this).find('.dropdown__list').toggleClass('dropdown__list_active');
        $(this).find('.dropdown__input-wrapper').toggleClass('dropdown__input-wrapper_active');
        e.stopPropagation();
    });
    $('.dropdown__list').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
});
