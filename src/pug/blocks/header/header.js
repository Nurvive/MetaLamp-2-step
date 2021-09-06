import './header-kit/header.scss'
import $ from "jquery";
let startingX;
$().ready(() => {
    $('.header__menu-dropdown').on('click', function () {
        if ($(this).hasClass('header__menu-dropdown_active')) {
            $(this).children().css('display', 'none')
            $(this).removeClass('header__menu-dropdown_active')
        } else {
            $(this).addClass('header__menu-dropdown_active')
            $(this).children().css('display', 'block')
        }
    })
    $('.side-menu__menu-dropdown').on('click', function () {
        $(this).children('.side-menu__dropdown-item').toggle(400)
    })
    let sideMenu= $('.side-menu');
    sideMenu.on('touchstart',function (event) {
        startingX = event.touches[0].clientX;
    })
    sideMenu.on('touchmove',function (event) {
        let touch = event.touches[0];
        let change = startingX - touch.clientX;
        if (change < 0) {
            return;
        }
        this.style.left = '-' + change + 'px';
        event.preventDefault();
    })
    sideMenu.on('touchend',function (event) {
        let change = startingX - event.changedTouches[0].clientX;
        let treshold = screen.width / 3;
        if (change < treshold) {
            this.style.left = 0;
            this.style.transition = 'all .1s';
        } else {
            this.style.transition = 'all .9s';
            this.style.left = '-70%';
        }
    })
})

