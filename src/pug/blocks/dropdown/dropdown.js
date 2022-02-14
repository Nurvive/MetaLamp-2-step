import {DropdownRooms} from './dropdown-kit/DropdownRooms';
import {DropdownDefault} from './dropdown-kit/DropdownDefault';

(() => {
    document.querySelectorAll('.dropdown-default').forEach((node) => {
        return new DropdownDefault(node, [
            ['гость', 'гостя', 'гостей'],
            ['младенец', 'младенца', 'младенцев']
        ]);
    });
})();
(() => {
    document.querySelectorAll('.dropdown-rooms').forEach((node) => {
        return new DropdownRooms(node, [
            ['спальня', 'спальни', 'спален'],
            ['кровать', 'кровати', 'кроватей'],
            ['ванная комната', 'ванные комнаты', 'ванных комнат']
        ]);
    });
})();
$().ready(function () {
    $('.js-dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).find('.js-dropdown__input').toggleClass('dropdown__input_active');
        $(this).find('.js-dropdown__list').toggleClass('dropdown__list_active');
        $(this).find('.js-dropdown__input-wrapper').toggleClass('dropdown__input-wrapper_active');
        e.stopPropagation();
    });
    $('.js-dropdown__list').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
});
