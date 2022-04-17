import Header from '../../blocks/header/header';
import FindRoom from '../../blocks/find-room/FindRoom';

class Landing {
    constructor(root) {
        this.$root = $(root);
        this.init();
    }

    init() {
        this.$root.parent().each((_, element) => new Header(element));
        this.$root.find('.js-landing__main').each((_, element) => new FindRoom(element));
    }
}

export {Landing};
