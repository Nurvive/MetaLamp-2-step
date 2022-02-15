import SideMenu from '../side-menu/side-menu';

class Header {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
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
            return new SideMenu('.header__logo-burger');
        });
    }
}

export default Header;
