import SideMenu from '../side-menu/SideMenu';

class Header {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.$element = $(root).find('.js-header');
        this.$menuDropdown = this.$element.find('.js-header__menu-dropdown');
        this.$menuDropdown.on('click', Header.handleMenuDropdownClick);
        (() => new SideMenu('.header__logo-burger'))();
    }

    static handleMenuDropdownClick(e) {
        const $dropdown = $(e.currentTarget);
        if ($dropdown.hasClass('header__menu-dropdown_active')) {
            $dropdown.children('.js-header__dropdown-item').addClass('header__dropdown-item_hide');
            $dropdown.removeClass('header__menu-dropdown_active');
        } else {
            $dropdown.addClass('header__menu-dropdown_active');
            $dropdown.children('.js-header__dropdown-item').removeClass('header__dropdown-item_hide');
        }
    }
}

export default Header;
