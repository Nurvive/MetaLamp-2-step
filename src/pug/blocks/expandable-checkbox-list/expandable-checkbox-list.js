import './expandable-checkbox-list.scss';

class ExpandableCheckboxList {
    constructor() {
        this.element = $('.js-expandable-checkbox__open-button');
        this.init();
    }

    init() {
        this.element.on('click', function () {
            const $inner = $(this).siblings('.js-expandable-checkbox__inner');
            if ($inner.hasClass('expandable-checkbox__inner_hide')) {
                $inner.removeClass('expandable-checkbox__inner_hide');
            } else {
                $inner.addClass('expandable-checkbox__inner_hide');
            }
            $(this).toggleClass('expandable-checkbox__open-button_active');
        });
    }
}

export default ExpandableCheckboxList;
