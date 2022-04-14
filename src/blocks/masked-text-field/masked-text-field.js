import IMask from 'imask';

class MaskedTextField {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.element = root.querySelector('.js-masked-text-field input');
        if (this.element !== null) {
            IMask(
                this.element,
                {
                    mask: Date,
                    blocks: {
                        d: {
                            mask: IMask.MaskedRange, placeholderChar: 'ДД', from: 1, to: 31, maxLength: 2
                        },
                        m: {
                            mask: IMask.MaskedRange, placeholderChar: 'ММ', from: 1, to: 12, maxLength: 2
                        },
                        Y: {
                            mask: IMask.MaskedRange, placeholderChar: 'ГГГГ', from: 1900, to: 2999, maxLength: 4
                        }
                    }
                }
            );
        }
    }
}

export default MaskedTextField;
