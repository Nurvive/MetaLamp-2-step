import Header from '../../blocks/header/header';

class HeaderFooter {
    constructor(root) {
        this.root = $(root);
        this.init();
    }

    init() {
        this.root.parent().each((_, element) => new Header(element));
    }
}

export {HeaderFooter};
