class LikeButton {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.element = $(element);
        this.element.on('click', LikeButton.handleLikeButtonClick);
    }

    static handleLikeButtonClick(e) {
        if ($(e.currentTarget).hasClass('like-button_active')) {
            $(e.currentTarget).removeClass('like-button_active');
            $(e.currentTarget).children('.js-like-button__count').text($(e.currentTarget).text() - 1);
        } else {
            $(e.currentTarget).addClass('like-button_active');
            $(e.currentTarget).children('.js-like-button__count').text(Number($(e.currentTarget).text()) + 1);
        }
    }
}

export default LikeButton;
