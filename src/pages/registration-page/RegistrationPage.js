import Header from '../../blocks/header/header';
import Registration from '../../blocks/registration/Registration';

class RegistrationPage {
    constructor(root) {
        this.$root = $(root);
        this.init();
    }

    init() {
        this.$root.parent().each((_, element) => new Header(element));
        this.$root.find('.js-registration-page__card-wrapper').each((_, element) => new Registration(element));
    }
}

export {RegistrationPage};
