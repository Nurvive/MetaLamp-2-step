import IMask from 'imask';

class MaskedTextField {
    constructor() {
        this.element = document.querySelector('.js-masked-text-field input');
        this.init();
    }

    init() {
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
