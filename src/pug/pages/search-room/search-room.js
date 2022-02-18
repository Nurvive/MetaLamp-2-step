import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

$().ready(() => {
    let width = ($(window).width());
    let $moveObjects = $('li.js-search-room__item:not([data-move="no"])');
    if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');

    $(window).resize(function () {
        width = ($(this).width());
        if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');
        else {
            $moveObjects.detach().appendTo('.search-room__list');
        }
    });
    $('.js-search-room__small-menu > *[data-attr="small-menu-title"]').on('click', function () {
        $(this).parent().children(':not(.search-room__layout)').toggle(100);
    });
});
