import {Dropdown} from './Dropdown';

export class DropdownRooms extends Dropdown {
    constructor(component, wordsDefault) {
        super(component, wordsDefault);
        this.rooms = this.component.querySelectorAll('.js-dropdown__item-text');
        this.obj = {};
        this.attachEventHandlers();
    }

    attachEventHandlers() {
        this.plus.forEach((node) => {
            node.addEventListener('click', (e) => this.countingGuests(e, true));
        });
        this.minus.forEach((node) => {
            node.addEventListener('click', (e) => this.countingGuests(e, false));
        });
    }

    countingGuests(event, operation) {
        if (operation) this.increase(event);
        else this.decrease(event);
        let index = event.target.dataset.index;
        let room = this.rooms[index].textContent;
        let counter = this.counters[index];
        this.obj[room] = Number(counter.textContent);
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
        let result = '';
        let comma = ', ';
        if (a) result += a;
        else comma = '';
        if (b) {
            result += comma + b;
            comma = ', ';
        } else comma = '';
        if (c) result += comma + c;
        this.input.value = result;
    }
}
