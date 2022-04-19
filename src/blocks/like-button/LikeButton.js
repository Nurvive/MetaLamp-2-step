class LikeButton {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.$element = $(root).find('.js-like-button');
        this.$element.on('click', this.handleLikeButtonClick);
    }

    handleLikeButtonClick = () => {
        if (this.$element.hasClass('like-button_active')) {
            this.$element.removeClass('like-button_active');
            this.$element.children('.js-like-button__count').text(this.$element.text() - 1);
        } else {
            this.$element.addClass('like-button_active');
            this.$element.children('.js-like-button__count').text(Number(this.$element.text()) + 1);
        }
    };
}

export default LikeButton;
