import './dropdown.pug'
import './dropdown-kit/dropdown.scss'

$().ready(function () {
    let gCount = 0;
    $('.dropdown__item-plus').on('click', function () {
        let count = Number($(this).siblings('.dropdown__item-count').text())
        count++
        gCount++
        countingGuests(gCount)
        $(this).siblings('.dropdown__item-count').text(count)
    });
    $('.dropdown__item-minus').on('click', function () {
        let count = Number($(this).siblings('.dropdown__item-count').text())
        if (count > 0) {
            count--
            gCount--
            countingGuests(gCount)
            $(this).siblings('.dropdown__item-count').text(count)
        }
    });
    $('#clear').on('click', () => {
        $('.dropdown__item-count').text(0)
        $('.dropdown__input').val('')
    });
    $('.dropdown__input, .dropdown__open-button').on('click', function (e) {
        e.preventDefault();
        $('.dropdown__input').toggleClass('dropdown__input_active')
        $('.dropdown__list').toggleClass('dropdown__list_active')
        $('.dropdown__input-wrapper').toggleClass('dropdown__input-wrapper_active')
        e.stopPropagation()
    })

    function countingGuests(count) {
        function declOfNum(n, text_forms) {
            n = Math.abs(n) % 100;
            let n1 = n % 10;
            if (n > 10 && n < 20) {
                return text_forms[2];
            }
            if (n1 > 1 && n1 < 5) {
                return text_forms[1];
            }
            if (n1 === 1) {
                return text_forms[0];
            }
            return text_forms[2];
        }

        let words = ['гость', "гостя", "гостей"]
        if (count > 0) {
            $('.dropdown__input').val(`${count} ${declOfNum(count, words)}`)
        } else {
            $('.dropdown__input').val('')
        }
    }
})
