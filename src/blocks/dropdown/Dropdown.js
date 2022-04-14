const dropdownTypes = {
    default: 'default',
    separate: 'separate'
};
const checkResults = {
    onlyIncrease: -1,
    onlyDecrease: 1,
    all: 0
};

class Dropdown {
    constructor(root, words, type, withButtons, defaultWords = []) {
        this.init(root, words, type, withButtons, defaultWords);
    }

    init(root, words, type, withButtons, defaultWords) {
        this.component = root.querySelector('.js-dropdown');
        this.words = words;
        this.type = type;
        this.withButtons = withButtons;
        this.defaultWords = [];
        this.restrictions = [];
        this.dropdownItems = {};
        this.inputWrapper = this.component.querySelector('.js-dropdown__input-wrapper');
        this.list = this.component.querySelector('.js-dropdown__list');
        this.input = this.component.querySelector('.js-dropdown__input');
        this.pluses = this.component.querySelectorAll('.js-dropdown-item__plus');
        this.minuses = this.component.querySelectorAll('.js-dropdown-item__minus');
        this.counters = this.component.querySelectorAll('.js-dropdown-item__count');
        this.items = this.component.querySelectorAll('.js-dropdown-item__text');
        if (this.withButtons) {
            this.clear = this.component.querySelector('.js-dropdown__interactive-clear');
            this.confirm = this.component.querySelector('.js-dropdown__interactive-confirm');
        }
        this.setup(defaultWords);
        this.attachEventHandlers();
    }

    setup(defaultWords) {
        defaultWords.forEach((elem, index) => {
            if (index % 2 === 0) {
                this.defaultWords.push(elem);
            } else {
                this.restrictions.push(elem);
            }
        });
        this.outputStrings = new Array(this.defaultWords.length);
        this.defaultWords.forEach((item, index) => {
            this.dropdownItems[item] = this.restrictions[index][2];
            this.counters[index].textContent = this.restrictions[index][2];
            if (this.type === dropdownTypes.default) {
                this.checkDefault(item, this.dropdownItems[item], index);
            } else if (this.type === dropdownTypes.separate) {
                this.checkSeparate(item, this.dropdownItems[item], index);
            }
            this.offDecreaseButton(index);
        });
        this.printInput(this.outputStrings);
    }

    handleClearClick = () => {
        this.defaultWords.forEach((item, index) => {
            this.dropdownItems[item] = this.restrictions[index][0];
            this.counters[index].textContent = this.restrictions[index][0];
            if (this.type === dropdownTypes.default) {
                this.checkDefault(item, this.dropdownItems[item], index);
            } else if (this.type === dropdownTypes.separate) {
                this.checkSeparate(item, this.dropdownItems[item], index);
            }
            this.offDecreaseButton(index);
            this.onIncreaseButton(index);
        });
        this.printInput(this.outputStrings);
    };

    handleConfirmClick = () => {
        this.input.classList.remove('dropdown__input_active');
        this.list.classList.remove('dropdown__list_active');
        this.inputWrapper.classList.remove('dropdown__input-wrapper_active');
    };

    handlePlusClick = (e) => {
        if (this.type === dropdownTypes.default) {
            if (this.countingDefault(e, 1) !== checkResults.onlyDecrease) this.increase(e);
        } else if (this.type === dropdownTypes.separate) {
            if (this.countingSeparate(e, 1) !== checkResults.onlyDecrease) this.increase(e);
        }
    };

    handleMinusClick = (e) => {
        if (this.type === dropdownTypes.default) {
            if (this.countingDefault(e, -1) !== checkResults.onlyIncrease) this.decrease(e);
        } else if (this.type === dropdownTypes.separate) {
            if (this.countingSeparate(e, -1) !== checkResults.onlyIncrease) this.decrease(e);
        }
    };

    handleDropdownClick = (e) => {
        e.preventDefault();
        this.input.classList.toggle('dropdown__input_active');
        this.list.classList.toggle('dropdown__list_active');
        this.inputWrapper.classList.toggle('dropdown__input-wrapper_active');
    };

    handleNotDropdownClick = (e) => {
        if (!this.component.contains(e.target)) {
            this.input.classList.remove('dropdown__input_active');
            this.list.classList.remove('dropdown__list_active');
            this.inputWrapper.classList.remove('dropdown__input-wrapper_active');
        }
    };

    attachEventHandlers() {
        this.pluses.forEach((node) => {
            node.addEventListener('click', this.handlePlusClick);
        });
        this.minuses.forEach((node) => {
            node.addEventListener('click', this.handleMinusClick);
        });
        this.input.addEventListener('click', this.handleDropdownClick);
        document.addEventListener('click', this.handleNotDropdownClick);
        if (this.withButtons) {
            this.clear.addEventListener('click', this.handleClearClick);
            this.confirm.addEventListener('click', this.handleConfirmClick);
        }
    }

    decrease(event) {
        const index = event.target.dataset.index;
        const counter = this.counters[index];
        this.onIncreaseButton(index);
        counter.textContent = Number(counter.textContent) - 1;
        this.offDecreaseButton(index);
    }

    offDecreaseButton(index) {
        const counter = this.counters[index];
        const node = this.minuses[index];
        if (Number(counter.textContent) === this.restrictions[index][0]) {
            node.classList.add('dropdown-item__minus_inactive');
        }
    }

    offIncreaseButton(index) {
        const counter = this.counters[index];
        const node = this.pluses[index];
        if (Number(counter.textContent) === this.restrictions[index][1]) {
            node.classList.add('dropdown-item__plus_inactive');
        }
    }

    onIncreaseButton(index) {
        const node = this.pluses[index];
        node.classList.remove('dropdown-item__plus_inactive');
    }

    onDecreaseButton(index) {
        const node = this.minuses[index];
        node.classList.remove('dropdown-item__minus_inactive');
    }

    increase(event) {
        const index = event.target.dataset.index;
        const counter = this.counters[index];
        this.onDecreaseButton(index);
        counter.textContent = Number(counter.textContent) + 1;
        this.offIncreaseButton(index);
    }

    checkDefault = (key, value, currIndex, operation = 0) => {
        let val;
        if (value + operation < this.restrictions[currIndex][0]) {
            return checkResults.onlyIncrease;
        }
        if (value + operation > this.restrictions[currIndex][1]) {
            return checkResults.onlyDecrease;
        }
        if (key === this.defaultWords[0] || key === this.defaultWords[1]) {
            const newValue = (this.dropdownItems[this.defaultWords[0]] || 0)
                + (this.dropdownItems[this.defaultWords[1]] || 0);
            val = Dropdown.declOfNum(newValue + operation, this.words[0]);
            this.outputStrings[0] = (newValue + operation) + ' ' + val;
        } else {
            val = Dropdown.declOfNum(value + operation, this.words[1]);
            this.outputStrings[1] = (value + operation) + ' ' + val;
        }
        return checkResults.all;
    };

    countingDefault(event, operation) {
        const index = event.target.dataset.index;
        this.items.forEach((item, i) => {
            this.dropdownItems[item.textContent] = Number(this.counters[i].textContent);
        });
        const currItem = Object.entries(this.dropdownItems)[index];
        const checkResult = this.checkDefault(currItem[0], currItem[1], index, operation);
        this.printInput(this.outputStrings);
        return checkResult;
    }

    checkSeparate = (key, value, currIndex, operation = 0) => {
        if (value + operation < this.restrictions[currIndex][0]) {
            let val = Dropdown.declOfNum(value, this.words[currIndex]);
            this.outputStrings[currIndex] = value + ' ' + val;
            return checkResults.onlyIncrease;
        }
        if (value + operation > this.restrictions[currIndex][1]) {
            let val = Dropdown.declOfNum(value, this.words[currIndex]);
            this.outputStrings[currIndex] = value + ' ' + val;
            return checkResults.onlyDecrease;
        }
        if (key === this.defaultWords[currIndex]) {
            let val = Dropdown.declOfNum(value + operation, this.words[currIndex]);
            this.outputStrings[currIndex] = (value + operation) + ' ' + val;
        }
        return checkResults.all;
    };

    printInput(arrayToPrint) {
        this.input.value = arrayToPrint.filter(el => el[0] !== '0').join(', ');
    }

    countingSeparate(event, operation) {
        const index = Number(event.target.dataset.index);
        const item = this.items[index].textContent;
        const counter = this.counters[index];
        this.dropdownItems[item] = Number(counter.textContent);
        const currItem = Object.entries(this.dropdownItems)[index];
        const checkResult = this.checkSeparate(currItem[0], currItem[1], index, operation);
        this.printInput(this.outputStrings);
        return checkResult;
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
