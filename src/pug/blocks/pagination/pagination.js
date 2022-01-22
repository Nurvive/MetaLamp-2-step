import './pagination.scss';
import 'paginationjs';

$().ready(() => {
    if (document.querySelector('.js-pagination') !== null) {
        $('.js-pagination').pagination({
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
            prevText: '<div class=\'pagination__arrow-prev arrow\'></div>',
            nextText: '<div class=\'pagination__arrow-next arrow\'></div>',
            callback: function (data, pagination) {
                $('.js-pagination__info1').text(data[0]);
                $('.js-pagination__info2').text(data[data.length - 1]);
                $('.js-pagination__info3').text(pagination.totalNumber);
            }
        });
    }
});
