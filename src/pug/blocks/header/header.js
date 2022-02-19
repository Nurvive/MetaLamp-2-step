import SideMenu from '../side-menu/side-menu';

class Header {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        $().ready(() => {
            this.element.on('click', Header.handleMenuDropdownClick);
            return new SideMenu('.header__logo-burger');
        });
    }

    static handleMenuDropdownClick(e) {
        if ($(e.currentTarget).hasClass('header__menu-dropdown_active')) {
            $(e.currentTarget).children(':not(.header__menu-dropdown-open-button)').css('display', 'none');
            $(e.currentTarget).removeClass('header__menu-dropdown_active');
        } else {
            $(e.currentTarget).addClass('header__menu-dropdown_active');
            $(e.currentTarget).children(':not(.header__menu-dropdown-open-button)').css('display', 'block');
        }
    }
}

export default Header;
