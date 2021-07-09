import './split-dropdown.pug'
import './split-dropdown-kit/split-dropdown.scss'

$().ready(function () {
    let obj = {};

    $('.split-dropdown__item-plus').on('click', function () {
        let count = Number($(this).siblings('.split-dropdown__item-count').text())
        count++;
        let countTarget = $(this).parent().siblings().text();
        obj[countTarget] = count;
        countingGuests(obj)
        $(this).siblings('.split-dropdown__item-count').text(count)
    });
    $('.split-dropdown__item-minus').on('click', function () {
        let count = Number($(this).siblings('.split-dropdown__item-count').text())
        if (count > 0) {
            count--
            let countTarget = $(this).parent().siblings().text();
            obj[countTarget] = count;
            countingGuests(obj)
            $(this).siblings('.split-dropdown__item-count').text(count)
        }
    });
    $('.split-dropdown__input, .split-dropdown__open-button').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('split-dropdown__input_active')
        $('.split-dropdown__list').toggleClass('split-dropdown__list_active')
        $('.split-dropdown__input-wrapper').toggleClass('split-dropdown__input-wrapper_active')
        e.stopPropagation()
    })

    function countingGuests(obj) {
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

        let words = [
            ['спальня', "спальни", "спален"],
            ["кровать", "кровати", "кроватей"],
            ["ванная комната", "ванные комнаты", "ванных комнат"]
        ]
        let a, b, c;
        a = ''
        b = ''
        c = ''
        for (let key in obj) {
            if (obj[key] > 0 && key === "спальни") {
                let val = declOfNum(obj[key], words[0])
                a = obj[key] + ' ' + val
            }
            if (obj[key] > 0 && key === "кровати") {
                let val = declOfNum(obj[key], words[1])
                b = obj[key] + ' ' + val
            }
            if (obj[key] > 0 && key === "ванные комнаты") {
                let val = declOfNum(obj[key], words[2])
                c = obj[key] + ' ' + val
            }
        }
        let result = '';
        let comma = ', ';
        if (a)
            result += a
        else
            comma = ''
        if (b) {
            result += comma + b
            comma = ', '
        }
        else
            comma= ''
        if (c)
            result += comma + c

        $('.split-dropdown__input').val(result)
    }
})
