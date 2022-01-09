import './pagination-kit/pagination.scss';
import 'paginationjs';

$().ready(() => {
    if (document.querySelector('.pagination') !== null) {
        $('.pagination').pagination({
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
            prevText: '<div class=\'pagination__arrow-prev\'></div>',
            nextText: '<div class=\'pagination__arrow-next\'></div>',
            callback: function (data, pagination) {
                $('.pagination__info1').text(data[0]);
                $('.pagination__info2').text(data[data.length - 1]);
                $('.pagination__info3').text(pagination.totalNumber);
            }
        });
    }
});
