export class Dropdown {
    constructor(component, wordsDefault) {
        this.component = component;
        this.wordsDefault = wordsDefault;
        this.obj = {};
        this.inputWrapper = this.component.querySelector('.js-dropdown__input-wrapper');
        this.list = this.component.querySelector('.js-dropdown__list');
        this.input = this.component.querySelector('.js-dropdown__input-wrapper input');
        this.plus = this.component.querySelectorAll('.dropdown__dropdown-item-wrapper div[data-type="plus"]');
        this.minus = this.component.querySelectorAll('.dropdown__dropdown-item-wrapper div[data-type="minus"]');
        this.counters = this.component.querySelectorAll('.dropdown__dropdown-item-wrapper div[data-type="count"]');
        this.clears = this.component.querySelectorAll('.js-dropdown__interactive-clear');
        this.confirms = this.component.querySelectorAll('.js-dropdown__interactive-confirm');
        this.items = this.component.querySelectorAll('.dropdown__dropdown-item-wrapper p');
    }

    static declOfNum(n, textForms) {
        let value = Math.abs(n) % 100;
        let n1 = n % 10;
        if (value > 10 && value < 20) {
            return textForms[2];
        }
        if (n1 > 1 && n1 < 5) {
            return textForms[1];
        }
        if (n1 === 1) {
            return textForms[0];
        }
        return textForms[2];
    }

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', (e) => {
                this.increase(e);
                this.countingGuests(e);
            });
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', (e) => {
                this.decrease(e);
                this.countingGuests(e);
            });
        });
        this.clears.forEach((node) => {
            node.addEventListener('click', (e) => this.clear(e));
        });
        this.confirms.forEach((node) => {
            node.addEventListener('click', (e) => this.confirm(e));
        });
    }

    decrease(event) {
        let index = event.target.dataset.index;
        let counter = this.counters[index];
        let node = this.minus[index];
        if (counter.innerHTML > 0) {
            counter.innerHTML = Number(counter.innerHTML) - 1;
        }
        if (Number(counter.innerHTML) === 0) {
            node.classList.add('dropdown-item__minus_inactive');
        }
    }

    increase(event) {
        let index = event.target.dataset.index;
        let counter = this.counters[index];
        let minus = this.minus[index];
        minus.classList.remove('dropdown-item__minus_inactive');
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }

    countingGuests(event) {
        let index = event.target.dataset.index;
        let item = this.items[index].textContent;
        let counter = this.counters[index];
        this.obj[item] = Number(counter.textContent);
        let a = '';
        let b = '';
        Object.entries(this.obj).forEach(([key, value]) => {
            if (value > 0 && (key === 'взрослые' || key === 'дети')) {
                const newValue = (this.obj['взрослые'] || 0) + (this.obj['дети'] || 0);
                let val = Dropdown.declOfNum(newValue, this.wordsDefault[0]);
                a = newValue + ' ' + val;
            }
            if (value > 0 && key === 'младенцы') {
                let val = Dropdown.declOfNum(value, this.wordsDefault[1]);
                b = value + ' ' + val;
            }
        });
        let result = '';
        let comma = ', ';
        if (a) result += a;
        else comma = '';
        if (b) {
            result += comma + b;
        }
        this.input.value = result;
    }

    clear() {
        this.obj = {};
        this.input.value = '';
        this.counters.forEach((node) => {
            node.innerHTML = 0;
        });
        this.minus.forEach((node) => {
            node.classList.add('dropdown-item__minus_inactive');
        });
    }

    confirm() {
        this.input.classList.remove('dropdown__input_active');
        this.list.classList.remove('dropdown__list_active');
        this.inputWrapper.classList.remove('dropdown__input-wrapper_active');
    }
}
