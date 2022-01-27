export class Dropdown {
    constructor(component, wordsDefault) {
        this.component = component;
        this.gCount = 0;
        this.inputWrapper = this.component.querySelector('.js-dropdown__input-wrapper');
        this.list = this.component.querySelector('.js-dropdown__list');
        this.input = this.component.querySelector('.js-dropdown__input');
        this.plus = this.component.querySelectorAll('.js-dropdown__item-plus');
        this.minus = this.component.querySelectorAll('.js-dropdown__item-minus');
        this.counters = this.component.querySelectorAll('.js-dropdown__item-count');
        this.clears = this.component.querySelectorAll('.js-clear');
        this.confirms = this.component.querySelectorAll('.js-confirm');
        this.wordsDefault = wordsDefault;
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
                this.countingGuests();
            });
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', (e) => {
                this.decrease(e);
                this.countingGuests();
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
            this.gCount -= 1;
        }
        if (Number(counter.innerHTML) === 0) {
            node.classList.add('dropdown__item-minus_inactive');
        }
    }

    increase(event) {
        let index = event.target.dataset.index;
        let counter = this.counters[index];
        let minus = this.minus[index];
        minus.classList.remove('dropdown__item-minus_inactive');
        counter.innerHTML = Number(counter.innerHTML) + 1;
        this.gCount += 1;
    }

    countingGuests() {
        if (this.gCount > 0) {
            this.input.value = `${this.gCount} ${Dropdown.declOfNum(this.gCount, this.wordsDefault)}`;
        } else {
            this.input.value = '';
        }
    }

    clear() {
        this.gCount = 0;
        this.input.value = '';
        this.counters.forEach((node) => {
            // eslint-disable-next-line no-param-reassign
            node.innerHTML = 0;
        });
        this.minus.forEach((node) => {
            node.classList.add('dropdown__item-minus_inactive');
        });
    }

    confirm() {
        this.input.classList.remove('dropdown__input_active');
        this.list.classList.remove('dropdown__list_active');
        this.inputWrapper.classList.remove('dropdown__input-wrapper_active');
    }
}
