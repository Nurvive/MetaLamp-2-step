class ExpandableCheckboxList {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        this.element.on('click', ExpandableCheckboxList.handleOpenButtonClick);
    }

    static handleOpenButtonClick(e) {
        const $inner = $(e.currentTarget).siblings('.js-expandable-checkbox__inner');
        if ($inner.hasClass('expandable-checkbox__inner_hide')) {
            $inner.removeClass('expandable-checkbox__inner_hide');
        } else {
            $inner.addClass('expandable-checkbox__inner_hide');
        }
        $(e.currentTarget).toggleClass('expandable-checkbox__open-button_active');
    }
}

export default ExpandableCheckboxList;
