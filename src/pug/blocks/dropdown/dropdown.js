import './dropdown-kit/dropdown.scss'

let wordsDefault = ['гость', "гостя", "гостей"]
let wordsRooms = [
    ['спальня', "спальни", "спален"],
    ["кровать", "кровати", "кроватей"],
    ["ванная комната", "ванные комнаты", "ванных комнат"]
]

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

class Dropdown {
    constructor(component) {
        this.component = component;
        this.gCount = 0;
        this.inputWrapper = this.component.querySelector('.dropdown__input-wrapper')
        this.list = this.component.querySelector('.dropdown__list')
        this.input = this.component.querySelector(".dropdown__input");
        this.plus = this.component.querySelectorAll(".dropdown__item-plus");
        this.minus = this.component.querySelectorAll(".dropdown__item-minus");
        this.counters = this.component.querySelectorAll(".dropdown__item-count");
        this.clears = this.component.querySelectorAll('.clear')
        this.confirms = this.component.querySelectorAll('.confirm')
        this.attachEventHandlers();

    }

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', () => this.increase())
        })
        this.minus.forEach((node) => {
            node.addEventListener('click', () => this.decrease())
        })
        this.clears.forEach((node) => {
            node.addEventListener('click', () => this.clear())
        })
        this.confirms.forEach((node) => {
            node.addEventListener('click', () => this.confirm())
        })
    }

    decrease() {
        let index = event.target.dataset.index;
        let counter = this.counters[index];
        if (counter.innerHTML > 0) {
            counter.innerHTML--
            this.gCount--
        }
        this.countingGuests()
    }

    increase() {
        let index = event.target.dataset.index;
        let counter = this.counters[index];
        counter.innerHTML++
        this.gCount++
        this.countingGuests()
    }

    countingGuests() {
        if (this.gCount > 0) {
            this.input.value = `${this.gCount} ${declOfNum(this.gCount, wordsDefault)}`
        } else {
            this.input.value = ''
        }
    }

    clear() {
        this.gCount = 0
        this.input.value = ''
        this.counters.forEach((node) => {
            node.innerHTML = 0
        })
    }
    confirm(){
        this.input.classList.remove('dropdown__input_active')
        this.list.classList.remove('dropdown__list_active')
        this.inputWrapper.classList.remove('dropdown__input-wrapper_active')
    }
}

class DropdownDefault extends Dropdown {

}

class DropdownRooms extends Dropdown {
    constructor(component) {
        super(component);
        this.rooms = this.component.querySelectorAll(".dropdown__item-text");
        this.obj = {}
    }

    countingGuests() {
        let index = event.target.dataset.index;
        let room = this.rooms[index].textContent
        let counter = this.counters[index];
        this.obj[room] = counter.textContent
        let a, b, c;
        a = ''
        b = ''
        c = ''
        for (let key in this.obj) {
            if (this.obj.hasOwnProperty(key)) {
                if (this.obj[key] > 0 && key === "спальни") {
                    let val = declOfNum(this.obj[key], wordsRooms[0])
                    a = this.obj[key] + ' ' + val
                }
                if (this.obj[key] > 0 && key === "кровати") {
                    let val = declOfNum(this.obj[key], wordsRooms[1])
                    b = this.obj[key] + ' ' + val
                }
                if (this.obj[key] > 0 && key === "ванные комнаты") {
                    let val = declOfNum(this.obj[key], wordsRooms[2])
                    c = this.obj[key] + ' ' + val
                }
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
        } else
            comma = ''
        if (c)
            result += comma + c

        this.input.value = result
    }

}

(() => {
    document.querySelectorAll(".dropdown-default").forEach((node) => {
        new DropdownDefault(node);
    });
})();
(() => {
    document.querySelectorAll(".dropdown-rooms").forEach((node) => {
        new DropdownRooms(node);
    });
})();
$().ready(function () {
    $('.dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).find('.dropdown__input').toggleClass('dropdown__input_active')
        $(this).find('.dropdown__list').toggleClass('dropdown__list_active')
        $(this).find('.dropdown__input-wrapper').toggleClass('dropdown__input-wrapper_active')
        e.stopPropagation()
    })
    $('.dropdown__list').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation()
    })

})


