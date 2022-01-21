import './header.scss';
let startingX;
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
    $('.js-side-menu__menu-dropdown').on('click', function () {
        $(this).children('.js-side-menu__dropdown-item').toggle(400);
    });
    const $sideMenu = $('.js-side-menu');
    $sideMenu.on('touchstart', function (event) {
        startingX = event.touches[0].clientX;
    });
    $sideMenu.on('touchmove', function (event) {
        let touch = event.touches[0];
        let change = startingX - touch.clientX;
        if (change < 0) {
            return;
        }
        this.style.left = '-' + change + 'px';
        event.preventDefault();
    });
    $sideMenu.on('touchend', function (event) {
        let change = startingX - event.changedTouches[0].clientX;
        let threshold = window.screen.width / 3;
        if (change < threshold) {
            this.style.left = 0;
            this.style.transition = 'all .1s';
        } else {
            this.style.transition = 'all .9s';
            this.style.left = '-70%';
        }
    });
});
