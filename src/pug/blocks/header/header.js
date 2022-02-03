import SideMenu from '../side-menu/side-menu';

class Header {
    constructor() {
        this.element = $('.js-header__menu-dropdown');
        this.init();
    }

    init() {
        $().ready(() => {
            this.element.on('click', function () {
                if ($(this).hasClass('header__menu-dropdown_active')) {
                    $(this).children(':not(.header__menu-dropdown-open-button)').css('display', 'none');
                    $(this).removeClass('header__menu-dropdown_active');
                } else {
                    $(this).addClass('header__menu-dropdown_active');
                    $(this).children(':not(.header__menu-dropdown-open-button)').css('display', 'block');
                }
            });
            // eslint-disable-next-line no-unused-vars
            const sideMenu = new SideMenu('.header__logo-burger');
        });
    }
}

export default Header;
