import './header.scss';
$().ready(() => {
    $('.js-header__menu-dropdown').on('click', function () {
        if ($(this).hasClass('header__menu-dropdown_active')) {
            $(this).children().css('display', 'none');
            $(this).removeClass('header__menu-dropdown_active');
        } else {
            $(this).addClass('header__menu-dropdown_active');
            $(this).children().css('display', 'block');
        }
    });
});
