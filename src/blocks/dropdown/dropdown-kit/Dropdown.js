const dropdownTypes = {
    default: 'default',
    separate: 'separate'
};

class Dropdown {
    constructor(component, words, type, withButtons, defaultTypeWords = []) {
        this.init(component, words, type, withButtons, defaultTypeWords);
    }

    init(component, words, type, withButtons, defaultTypeWords) {
        this.component = component;
        this.words = words;
        this.type = type;
        this.withButtons = withButtons;
        this.obj = {};
        this.inputWrapper = this.component.querySelector('.js-dropdown__input-wrapper');
        this.list = this.component.querySelector('.js-dropdown__list');
        this.input = this.component.querySelector('.js-dropdown__input');
        this.plus = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="plus"]');
        this.minus = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="minus"]');
        this.counters = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper div[data-type="count"]');
        this.items = this.component.querySelectorAll('.js-dropdown__dropdown-item-wrapper p');
        if (this.withButtons) {
            this.clears = this.component.querySelectorAll('.js-dropdown__interactive-clear');
            this.confirms = this.component.querySelectorAll('.js-dropdown__interactive-confirm');
        }
        if (this.type === dropdownTypes.default) {
            this.defaultTypeWords = defaultTypeWords;
        }
        this.attachEventHandlers();
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
        if (this.type === dropdownTypes.default) {
            this.countingGuestsDefault(e);
        } else if (this.type === dropdownTypes.separate) {
            this.countingGuestsSeparate(e);
        }
    };

    handleMinusClick = (e) => {
        this.decrease(e);
        if (this.type === dropdownTypes.default) {
            this.countingGuestsDefault(e);
        } else if (this.type === dropdownTypes.separate) {
            this.countingGuestsSeparate(e);
        }
    };

    static handleDropdownListClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDropdownClick = (e) => {
        e.preventDefault();
        this.input.classList.toggle('dropdown__input_active');
        this.list.classList.toggle('dropdown__list_active');
        this.inputWrapper.classList.toggle('dropdown__input-wrapper_active');
        e.stopPropagation();
    };

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', this.handlePlusClick);
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', this.handleMinusClick);
        });
        this.list.addEventListener('click', Dropdown.handleDropdownListClick);
        this.component.addEventListener('click', this.handleDropdownClick);
        if (this.withButtons) {
            this.clears.forEach((node) => {
                node.addEventListener('click', this.handleClearClick);
            });
            this.confirms.forEach((node) => {
                node.addEventListener('click', this.handleConfirmClick);
            });
        }
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

    countingGuestsDefault(event) {
        const index = event.target.dataset.index;
        const item = this.items[index].textContent;
        const counter = this.counters[index];
        this.obj[item] = Number(counter.textContent);
        let a = '';
        let b = '';
        Object.entries(this.obj).forEach(([key, value]) => {
            if (value > 0 && (key === this.defaultTypeWords[0]
                || key === this.defaultTypeWords[1])) {
                const newValue = (this.obj[this.defaultTypeWords[0]] || 0)
                    + (this.obj[this.defaultTypeWords[1]] || 0);
                let val = Dropdown.declOfNum(newValue, this.words[0]);
                a = newValue + ' ' + val;
            }
            if (value > 0 && key === this.defaultTypeWords[2]) {
                let val = Dropdown.declOfNum(value, this.words[1]);
                b = value + ' ' + val;
            }
        });
        this.input.value = [a, b].filter(el => el).join(', ');
    }

    countingGuestsSeparate(event) {
        const index = event.target.dataset.index;
        const item = this.items[index].textContent;
        const counter = this.counters[index];
        this.obj[item] = Number(counter.textContent);
        let a = '';
        let b = '';
        let c = '';
        Object.entries(this.obj).forEach(([key, value]) => {
            if (value > 0 && key === this.words[0][1]) {
                let val = Dropdown.declOfNum(value, this.words[0]);
                a = value + ' ' + val;
            }
            if (value > 0 && key === this.words[1][1]) {
                let val = Dropdown.declOfNum(value, this.words[1]);
                b = value + ' ' + val;
            }
            if (value > 0 && key === this.words[2][1]) {
                let val = Dropdown.declOfNum(value, this.words[2]);
                c = value + ' ' + val;
            }
        });
        this.input.value = [a, b, c].filter(el => el).join(', ');
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

export {
    Dropdown
};
export default dropdownTypes;
