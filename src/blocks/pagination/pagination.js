import 'paginationjs';

class Pagination {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        if (this.element[0] == null) return;
        this.element.pagination({
            dataSource: function (done) {
                let result = [];
                for (let i = 1; i < 180; i += 1) {
                    result.push(i);
                }
                done(result);
            },
            pageSize: 12,
            pageRange: 1,
            autoHideNext: true,
            autoHidePrevious: true,
            prevText: '<div class=\'pagination__arrow-prev pagination__arrow\'></div>',
            nextText: '<div class=\'pagination__arrow-next pagination__arrow\'></div>',
            callback: function (data, pagination) {
                $('.js-pagination__info1').text(data[0]);
                $('.js-pagination__info2').text(data[data.length - 1]);
                $('.js-pagination__info3').text(pagination.totalNumber);
            }
        });
    }
}

export default Pagination;
