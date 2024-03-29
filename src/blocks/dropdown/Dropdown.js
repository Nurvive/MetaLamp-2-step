import ending from '../../utils/ending';

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
        defaultWords.forEach((elem) => {
            this.defaultWords.push(elem.word);
            this.restrictions.push({
                min: elem.min,
                max: elem.max,
                current: elem.current
            });
        });
        this.outputStrings = new Array(this.defaultWords.length);
        this.defaultWords.forEach((item, index) => {
            this.dropdownItems[item] = this.restrictions[index].current;
            this.counters[index].textContent = this.restrictions[index].current;
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
            this.dropdownItems[item] = this.restrictions[index].min;
            this.counters[index].textContent = this.restrictions[index].min;
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
        const index = e.target.dataset.index;
        if (this.type === dropdownTypes.default) {
            if (this.countingDefault(index, 1) !== checkResults.onlyDecrease) this.increase(index);
        } else if (this.type === dropdownTypes.separate) {
            if (this.countingSeparate(index, 1) !== checkResults.onlyDecrease) this.increase(index);
        }
    };

    handleMinusClick = (e) => {
        const index = e.target.dataset.index;
        if (this.type === dropdownTypes.default) {
            if (this.countingDefault(index, -1) !== checkResults.onlyIncrease) this.decrease(index);
        } else if (this.type === dropdownTypes.separate) {
            if (this.countingSeparate(index, -1) !== checkResults.onlyIncrease) {
                this.decrease(index);
            }
        }
    };

    handleDropdownClick = (e) => {
        e.preventDefault();
        this.input.classList.toggle('dropdown__input_active');
        this.list.classList.toggle('dropdown__list_active');
        this.inputWrapper.classList.toggle('dropdown__input-wrapper_active');
    };

    handleDocumentClick = (e) => {
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
        document.addEventListener('click', this.handleDocumentClick);
        if (this.withButtons) {
            this.clear.addEventListener('click', this.handleClearClick);
            this.confirm.addEventListener('click', this.handleConfirmClick);
        }
    }

    decrease(index) {
        const counter = this.counters[index];
        this.onIncreaseButton(index);
        counter.textContent = Number(counter.textContent) - 1;
        this.offDecreaseButton(index);
    }

    offDecreaseButton(index) {
        const counter = this.counters[index];
        const node = this.minuses[index];
        if (Number(counter.textContent) === this.restrictions[index].min) {
            node.classList.add('dropdown-item__minus_inactive');
        }
    }

    offIncreaseButton(index) {
        const counter = this.counters[index];
        const node = this.pluses[index];
        if (Number(counter.textContent) === this.restrictions[index].max) {
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

    increase(index) {
        const counter = this.counters[index];
        this.onDecreaseButton(index);
        counter.textContent = Number(counter.textContent) + 1;
        this.offIncreaseButton(index);
    }

    checkDefault = (key, value, currIndex, operation = 0) => {
        if (value + operation < this.restrictions[currIndex].min) {
            return checkResults.onlyIncrease;
        }
        if (value + operation > this.restrictions[currIndex].max) {
            return checkResults.onlyDecrease;
        }
        if (key === this.defaultWords[0] || key === this.defaultWords[1]) {
            const newValue = (this.dropdownItems[this.defaultWords[0]] || 0)
                + (this.dropdownItems[this.defaultWords[1]] || 0);
            const val = ending(newValue + operation, this.words[0]);
            this.outputStrings[0] = (newValue + operation) + ' ' + val;
        } else {
            const val = ending(value + operation, this.words[1]);
            this.outputStrings[1] = (value + operation) + ' ' + val;
        }
        return checkResults.all;
    };

    countingDefault(index, operation) {
        this.items.forEach((item, i) => {
            this.dropdownItems[item.textContent] = Number(this.counters[i].textContent);
        });
        const currItem = Object.entries(this.dropdownItems)[index];
        const checkResult = this.checkDefault(currItem[0], currItem[1], index, operation);
        this.printInput(this.outputStrings);
        return checkResult;
    }

    checkSeparate = (key, value, currIndex, operation = 0) => {
        if (value + operation < this.restrictions[currIndex].min) {
            let val = ending(value, this.words[currIndex]);
            this.outputStrings[currIndex] = value + ' ' + val;
            return checkResults.onlyIncrease;
        }
        if (value + operation > this.restrictions[currIndex].max) {
            let val = ending(value, this.words[currIndex]);
            this.outputStrings[currIndex] = value + ' ' + val;
            return checkResults.onlyDecrease;
        }
        if (key === this.defaultWords[currIndex]) {
            let val = ending(value + operation, this.words[currIndex]);
            this.outputStrings[currIndex] = (value + operation) + ' ' + val;
        }
        return checkResults.all;
    };

    printInput(arrayToPrint) {
        this.input.value = arrayToPrint.filter(el => el[0] !== '0').join(', ');
    }

    countingSeparate(index, operation) {
        const item = this.items[index].textContent;
        const counter = this.counters[index];
        this.dropdownItems[item] = Number(counter.textContent);
        const currItem = Object.entries(this.dropdownItems)[index];
        const checkResult = this.checkSeparate(currItem[0], currItem[1], index, operation);
        this.printInput(this.outputStrings);
        return checkResult;
    }
}

export {
    Dropdown
};
export default dropdownTypes;
