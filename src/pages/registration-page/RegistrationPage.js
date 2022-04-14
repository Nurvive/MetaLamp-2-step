import MaskedTextField from '../../blocks/masked-text-field/masked-text-field';
import Header from '../../blocks/header/header';

class Registration {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.find('.js-masked-text-field input').each((_, element) => new MaskedTextField(element));
        this.root.parent().find('.js-header').each((_, element) => new Header(element));
    }
}

export {Registration};
