import {Dropdown} from './Dropdown';

class DropdownDefault extends Dropdown {
    constructor(component, wordsDefault) {
        super(component, wordsDefault);
        this.attachEventHandlers();
    }
}

export {DropdownDefault};
