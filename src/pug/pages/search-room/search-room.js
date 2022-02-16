import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

$().ready(() => {
    let width = ($(window).width());
    let $moveObjects = $('li.js-search-room__item:not([data-move="no"])');
    if (width < 900) $moveObjects.detach().appendTo('.small-menu__content');

    $(window).resize(function () {
        width = ($(this).width());
        if (width < 900) $moveObjects.detach().appendTo('.small-menu__content');
        else {
            $moveObjects.detach().appendTo('.search-room__list');
        }
    });
    $('.js-small-menu-title').on('click', function () {
        $(this).parent().children(':not(.search-room__layout)').toggle(100);
    });
});
