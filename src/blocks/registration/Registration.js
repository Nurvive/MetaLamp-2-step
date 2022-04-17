import MaskedTextField from '../masked-text-field/masked-text-field';

class Registration {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.$component = $(root).find('.js-registration');
        this.$component.find('.js-registration__layout-masked-text-field').each((_, element) => new MaskedTextField(element));
    }
}

export default Registration;
