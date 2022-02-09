class LikeButton {
    constructor(element) {
        this.element = $(element);
        this.init();
    }

    init() {
        this.element.on('click', function () {
            if ($(this).hasClass('like-button_active')) {
                $(this).removeClass('like-button_active');
                $(this).children('.js-like-button__count').text($(this).text() - 1);
            } else {
                $(this).addClass('like-button_active');
                $(this).children('.js-like-button__count').text(Number($(this).text()) + 1);
            }
        });
    }
}

export default LikeButton;
