class ExpandableCheckboxList {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.element = $(root).find('.js-expandable-checkbox');
        this.element.on('click', this.handleOpenButtonClick);
    }

    handleOpenButtonClick = (e) => {
        const $inner = this.element.children('.js-expandable-checkbox__inner');
        const $openButton = this.element.children('.js-expandable-checkbox__open-button');
        const $text = this.element.children('.js-expandable-checkbox__text');
        if (e.target === $openButton[0] || e.target === $text[0] || e.target === this.element[0]) {
            if ($inner.hasClass('expandable-checkbox__inner_hide')) {
                $inner.removeClass('expandable-checkbox__inner_hide');
            } else {
                $inner.addClass('expandable-checkbox__inner_hide');
            }
            this.element.children('.js-expandable-checkbox__open-button').toggleClass('expandable-checkbox__open-button_active');
        }
    };
}

export default ExpandableCheckboxList;
