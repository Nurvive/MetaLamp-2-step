import './search-room-kit/search-room.scss'
import 'jquery'

$().ready(() => {
    let width = ($(window).width())
    let moveObjects = $('li.search-room__item:not([data-move="no"])')
    if (width < 900)
        moveObjects.detach().appendTo('.small-menu__content')

    $(window).resize(function () {
        width = ($(this).width())
        if (width < 900)
            moveObjects.detach().appendTo('.small-menu__content')
        else {
            moveObjects.detach().appendTo('.search-room__list')
        }
    })
    $('.small-menu__content *:not(.dropdown__input-wrapper, .dropdown__open-button, .dropdown__input)').on('click', function (e) {
        e.stopPropagation()
    })
    $('.small-menu-title').on('click', function () {
        $(this).parent().children(':not(.search-room__layout)').toggle(100)
    })

})
