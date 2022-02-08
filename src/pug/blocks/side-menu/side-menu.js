class SideMenu {
    constructor(burger) {
        this.element = $('.js-side-menu');
        this.burger = $(burger);
        this.menuDropdown = $('.js-side-menu__menu-dropdown');
        this.close = $('.js-side-menu__close');
        this.startingX = 0;
        this.init();
    }

    init() {
        this.element.on('touchstart', this.touchStartHandler.bind(this));
        this.element.on('touchmove', this.touchMoveHandler.bind(this));
        this.element.on('touchend', this.touchEndHandler.bind(this));
        this.menuDropdown.on('click', SideMenu.dropdownClickHandler.bind(this));
        this.burger.on('click', this.burgerClickHandler.bind(this));
        this.close.on('click', this.closeHandler.bind(this));
    }

    touchStartHandler(event) {
        this.startingX = event.touches[0].clientX;
    }

    touchMoveHandler(event) {
        let touch = event.touches[0];
        let change = this.startingX - touch.clientX;
        if (change < 0) {
            return;
        }
        this.element[0].style.left = '-' + change + 'px';
        event.preventDefault();
    }

    touchEndHandler(event) {
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
    }

    static dropdownClickHandler(e) {
        $(e.target).children('.js-side-menu__dropdown-item').toggle(400);
    }

    burgerClickHandler() {
        this.element.removeClass('side-menu_hide');
        this.element.addClass('side-menu_active');
    }

    closeHandler() {
        this.element.removeClass('side-menu_active');
        this.element.addClass('side-menu_hide');
    }
}

export default SideMenu;
