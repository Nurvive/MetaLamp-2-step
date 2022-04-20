class SideMenu {
    constructor(burger) {
        this.init(burger);
    }

    init(burger) {
        this.startingX = 0;
        this.$element = $('.js-side-menu');
        this.$burger = burger;
        this.$menuDropdown = this.$element.find('.js-side-menu__menu-dropdown');
        this.$close = this.$element.children('.js-side-menu__close');
        this.$element.on('touchstart', this.handleSideMenuTouchStart);
        this.$element.on('touchmove', this.handleSideMenuTouchMove);
        this.$element.on('touchend', this.handleSideMenuTouchEnd);
        this.$menuDropdown.on('click', SideMenu.handleMenuDropdownClick);
        this.$burger.on('click', this.handleBurgerClick);
        this.$close.on('click', this.handleCloseClick);
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
        this.$element[0].style.left = '-' + change + 'px';
        event.preventDefault();
    };

    handleSideMenuTouchEnd = (event) => {
        const change = this.startingX - event.changedTouches[0].clientX;
        const threshold = window.screen.width / 3;
        if (change < threshold) {
            this.$element.addClass('side-menu_active');
        } else {
            this.$element.removeClass('side-menu_active');
        }
        this.$element[0].style.left = null;
    };

    static handleMenuDropdownClick(e) {
        $(e.currentTarget).children('.js-side-menu__dropdown-item').toggle(400);
        $(e.currentTarget).toggleClass('side-menu__menu-dropdown_active');
    }

    handleBurgerClick = () => {
        this.$element.addClass('side-menu_active');
    };

    handleCloseClick = () => {
        this.$element.removeClass('side-menu_active');
    };
}

export default SideMenu;
