import {Dropdown} from './dropdown-kit/Dropdown';
import dropdownTypes from './dropdown-kit/Dropdown';

(() => {
    document.querySelectorAll('.js-dropdown-default').forEach((node) => {
        return new Dropdown(node, [
            ['гость', 'гостя', 'гостей'],
            ['младенец', 'младенца', 'младенцев']
        ], dropdownTypes.default, true, ['взрослые', 'дети', 'младенцы']);
    });
})();
(() => {
    document.querySelectorAll('.js-dropdown-rooms').forEach((node) => {
        return new Dropdown(node, [
            ['спальня', 'спальни', 'спален'],
            ['кровать', 'кровати', 'кроватей'],
            ['ванная комната', 'ванные комнаты', 'ванных комнат']
        ], dropdownTypes.separate, false);
    });
})();
