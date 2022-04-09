import {Dropdown} from './Dropdown';

class DropdownRooms extends Dropdown {
    constructor(component, wordsDefault) {
        super(component, wordsDefault);
        this.attachEventHandlers();
    }

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', this.handlePlusClick);
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', this.handleMinusClick);
        });
    }

    countingGuests(event) {
        const index = event.target.dataset.index;
        const item = this.items[index].textContent;
        const counter = this.counters[index];
        this.obj[item] = Number(counter.textContent);
        let a = '';
        let b = '';
        let c = '';
        Object.entries(this.obj).forEach(([key, value]) => {
            if (value > 0 && key === 'спальни') {
                let val = Dropdown.declOfNum(value, this.wordsDefault[0]);
                a = value + ' ' + val;
            }
            if (value > 0 && key === 'кровати') {
                let val = Dropdown.declOfNum(value, this.wordsDefault[1]);
                b = value + ' ' + val;
            }
            if (value > 0 && key === 'ванные комнаты') {
                let val = Dropdown.declOfNum(value, this.wordsDefault[2]);
                c = value + ' ' + val;
            }
        });
        this.input.value = [a, b, c].filter(el => el).join(', ');
    }
}

export {DropdownRooms};
