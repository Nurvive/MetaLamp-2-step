import Header from '../../blocks/header/header';

class SignIn {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.parent().find('.js-header').each((_, element) => new Header(element));
    }
}

export {SignIn};
