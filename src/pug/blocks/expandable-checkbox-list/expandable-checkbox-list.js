import './expandable-checkbox-list-kit/expandable-checkbox-list.scss';

function ReverseObject(Obj) {
    let NewObj = [];
    $.each(Obj, (index, item) => {
        NewObj.unshift(item);
    });
    return NewObj;
}

$().ready(() => {
    $('.expandable-checkbox__open-button').on('click', function () {
        let list = $('.expandable-checkbox__list');
        $(this).toggleClass('expandable-checkbox__open-button_active');
        let items = list.children();
        if (list.hasClass('expandable-checkbox__list_active')) {
            items = ReverseObject(items);
            $.each(items, (index, item) => {
                setTimeout(() => item.classList.remove('show'), 100, item);
            });
        } else {
            $.each(items, (index, item) => {
                setTimeout(() => item.classList.add('show'), 100, item);
            });
        }
        list.toggleClass('expandable-checkbox__list_active');
    });
});
