import $ from "jquery";

$().ready(() => {
    $('.header__menu-dropdown').on('click', function() {
        if ($(this).hasClass('header__menu-dropdown--active')) {
            $(this).children().css('display', 'none')
            $(this).removeClass('header__menu-dropdown--active')
        } else {
            $(this).addClass('header__menu-dropdown--active')
            $(this).children().css('display', 'block')
        }
    })

})
