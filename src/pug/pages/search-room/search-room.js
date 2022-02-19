import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

function handleSmallMenuClick(e) {
    $(e.currentTarget).parent().children(':not(.search-room__layout)').toggle(100);
}

const handleWindowResize = ($moveObjects) => (e) => {
    const width = $(e.currentTarget).width();
    if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');
    else {
        $moveObjects.detach().appendTo('.search-room__list');
    }
};

$().ready(() => {
    let width = ($(window).width());
    let $moveObjects = $('li.js-search-room__item:not([data-move="no"])');
    if (width < 900) $moveObjects.detach().appendTo('.search-room__small-menu-content');
    $(window).resize(handleWindowResize($moveObjects));
    $('.js-search-room__small-menu > *[data-attr="small-menu-title"]').on('click', handleSmallMenuClick);
});
