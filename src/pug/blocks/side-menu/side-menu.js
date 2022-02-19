class SideMenu {
    constructor(burger) {
        this.init(burger);
    }

    init(burger) {
        this.startingX = 0;
        this.element = $('.js-side-menu');
        this.burger = $(burger);
        this.menuDropdown = $('.js-side-menu__menu-dropdown');
        this.close = $('.js-side-menu__close');
        this.element.on('touchstart', this.handleSideMenuTouchStart);
        this.element.on('touchmove', this.handleSideMenuTouchMove);
        this.element.on('touchend', this.handleSideMenuTouchEnd);
        this.menuDropdown.on('click', SideMenu.handleMenuDropdownClick);
        this.burger.on('click', this.handleBurgerClick);
        this.close.on('click', this.handleCloseClick);
    }

    handleSideMenuTouchStart = (event) => {
        this.startingX = event.touches[0].clientX;
    };

    handleSideMenuTouchMove = (event) => {
        let touch = event.touches[0];
        let change = this.startingX - touch.clientX;
        if (change < 0) {
            return;
        }
        this.element[0].style.left = '-' + change + 'px';
        event.preventDefault();
    };

    handleSideMenuTouchEnd = (event) => {
        const change = this.startingX - event.changedTouches[0].clientX;
        const threshold = window.screen.width / 3;
        if (change < threshold) {
            this.element.removeClass('side-menu_hide');
            this.element.addClass('side-menu_active');
        } else {
            this.element.removeClass('side-menu_active');
            this.element.addClass('side-menu_hide');
        }
        this.element[0].style.left = null;
    };

    static handleMenuDropdownClick(e) {
        $(e.target).children('.js-side-menu__dropdown-item').toggle(400);
    }

    handleBurgerClick = () => {
        this.element.removeClass('side-menu_hide');
        this.element.addClass('side-menu_active');
    };

    handleCloseClick = () => {
        this.element.removeClass('side-menu_active');
        this.element.addClass('side-menu_hide');
    };
}

export default SideMenu;
