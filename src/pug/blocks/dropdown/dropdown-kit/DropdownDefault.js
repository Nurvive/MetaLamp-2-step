import {Dropdown} from './Dropdown';

export class DropdownDefault extends Dropdown {
    constructor(component, wordsDefault) {
        super(component, wordsDefault);
        this.attachEventHandlers();
    }
}
