import './side-menu.scss';

let startingX;

$('.js-side-menu__menu-dropdown').on('click', function () {
    $(this).children('.js-side-menu__dropdown-item').toggle(400);
});

const $sideMenu = $('.js-side-menu');
const $burger = $('.header__logo-burger');
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
        $(this).removeClass('side-menu_hide');
        $(this).addClass('side-menu_active');
    } else {
        $(this).removeClass('side-menu_active');
        $(this).addClass('side-menu_hide');
    }
    this.style.left = null;
});

$burger.on('click', function () {
    $sideMenu.removeClass('side-menu_hide');
    $sideMenu.addClass('side-menu_active');
});

$(window).on('click', function (e) {
    const target = e.target;
    const countInnerElements = $sideMenu.children().filter(item => item === target).length;
    if (target !== $burger[0] && target !== $sideMenu[0] && countInnerElements) {
        $sideMenu.removeClass('side-menu_active');
        $sideMenu.addClass('side-menu_hide');
    }
});
