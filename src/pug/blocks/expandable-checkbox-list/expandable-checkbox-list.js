class ExpandableCheckboxList {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        this.element.on('click', this.handleOpenButtonClick);
    }

    handleOpenButtonClick = () => {
        const $inner = this.element.siblings('.js-expandable-checkbox__inner');
        if ($inner.hasClass('expandable-checkbox__inner_hide')) {
            $inner.removeClass('expandable-checkbox__inner_hide');
        } else {
            $inner.addClass('expandable-checkbox__inner_hide');
        }
        this.element.toggleClass('expandable-checkbox__open-button_active');
    };
}

export default ExpandableCheckboxList;
