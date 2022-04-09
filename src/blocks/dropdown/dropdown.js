import {DropdownRooms} from './dropdown-kit/DropdownRooms';
import {DropdownDefault} from './dropdown-kit/DropdownDefault';

(() => {
    document.querySelectorAll('.js-dropdown-default').forEach((node) => {
        return new DropdownDefault(node, [
            ['гость', 'гостя', 'гостей'],
            ['младенец', 'младенца', 'младенцев']
        ]);
    });
})();
(() => {
    document.querySelectorAll('.js-dropdown-rooms').forEach((node) => {
        return new DropdownRooms(node, [
            ['спальня', 'спальни', 'спален'],
            ['кровать', 'кровати', 'кроватей'],
            ['ванная комната', 'ванные комнаты', 'ванных комнат']
        ]);
    });
})();

function handleDropdownClick(e) {
    e.preventDefault();
    $(e.currentTarget).find('.js-dropdown__input').toggleClass('dropdown__input_active');
    $(e.currentTarget).find('.js-dropdown__list').toggleClass('dropdown__list_active');
    $(e.currentTarget).find('.js-dropdown__input-wrapper').toggleClass('dropdown__input-wrapper_active');
    e.stopPropagation();
}

function handleDropdownListClick(e) {
    e.preventDefault();
    e.stopPropagation();
}

$().ready(function () {
    $('.js-dropdown').on('click', handleDropdownClick);
    $('.js-dropdown__list').on('click', handleDropdownListClick);
});
