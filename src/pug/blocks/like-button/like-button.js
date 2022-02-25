class LikeButton {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        this.element.on('click', this.handleLikeButtonClick);
    }

    handleLikeButtonClick = () => {
        if (this.element.hasClass('like-button_active')) {
            this.element.removeClass('like-button_active');
            this.element.children('.js-like-button__count').text(this.element.text() - 1);
        } else {
            this.element.addClass('like-button_active');
            this.element.children('.js-like-button__count').text(Number(this.element.text()) + 1);
        }
    };
}

export default LikeButton;
