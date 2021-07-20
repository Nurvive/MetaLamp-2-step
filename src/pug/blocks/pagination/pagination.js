
import './pagination-kit/pagination.scss'
import 'paginationjs'

$().ready(() => {
    if (document.querySelector(".pagination") !== null) {
        $('.pagination').pagination({
            dataSource: function (done) {
                let result = [];
                for (let i = 1; i < 180; i++) {
                    result.push(i);
                }
                done(result);
            },
            pageSize: 12,
            pageRange: 1,
            autoHideNext: true,
            autoHidePrevious: true,
            prevText: `<div class='pagination__arrow-prev'></div>`,
            nextText: `<div class='pagination__arrow-next'></div>`
        })
    }
})
