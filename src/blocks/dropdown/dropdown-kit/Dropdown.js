class Dropdown {
    constructor(component, wordsDefault) {
        this.init(component, wordsDefault);
    }

    init(component, wordsDefault) {
        this.component = component;
        this.wordsDefault = wordsDefault;
        this.obj = {};
        this.inputWrapper = this.component.querySelector('.js-dropdown__input-wrapper');
        this.list = this.component.querySelector('.js-dropdown__list');
        this.input = this.component.querySelector('.js-dropdown__input-wrapper input');
        this.plus = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="plus"]');
        this.minus = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="minus"]');
        this.counters = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="count"]');
        this.clears = this.component.querySelectorAll('.js-dropdown__interactive-clear');
        this.confirms = this.component.querySelectorAll('.js-dropdown__interactive-confirm');
        this.items = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper p');
    }

    handleClearClick = () => {
        this.obj = {};
        this.input.value = '';
        this.counters.forEach((node) => {
            node.innerHTML = 0;
        });
        this.minus.forEach((node) => {
            node.classList.add('dropdown-item__minus_inactive');
        });
    };

    handleConfirmClick = () => {
        this.input.classList.remove('dropdown__input_active');
        this.list.classList.remove('dropdown__list_active');
        this.inputWrapper.classList.remove('dropdown__input-wrapper_active');
    };

    handlePlusClick = (e) => {
        this.increase(e);
        this.countingGuests(e);
    };

    handleMinusClick = (e) => {
        this.decrease(e);
        this.countingGuests(e);
    };

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', this.handlePlusClick);
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', this.handleMinusClick);
        });
        this.clears.forEach((node) => {
            node.addEventListener('click', this.handleClearClick);
        });
        this.confirms.forEach((node) => {
            node.addEventListener('click', this.handleConfirmClick);
        });
    }

    decrease(event) {
        const index = event.target.dataset.index;
        const counter = this.counters[index];
        const node = this.minus[index];
        if (counter.innerHTML > 0) {
            counter.innerHTML = Number(counter.innerHTML) - 1;
        }
        if (Number(counter.innerHTML) === 0) {
            node.classList.add('dropdown-item__minus_inactive');
        }
    }

    increase(event) {
        const index = event.target.dataset.index;
        const counter = this.counters[index];
        const minus = this.minus[index];
        minus.classList.remove('dropdown-item__minus_inactive');
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }

    countingGuests(event) {
        const index = event.target.dataset.index;
        const item = this.items[index].textContent;
        const counter = this.counters[index];
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
        this.input.value = [a, b].filter(el => el).join(', ');
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
}

export {Dropdown};
