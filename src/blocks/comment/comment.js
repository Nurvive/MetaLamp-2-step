import LikeButton from '../like-button/like-button';

class Comment {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.component = $(root).find('.js-comment');
        this.component.find('.js-comment__content').each((_, element) => new LikeButton(element));
    }
}

export default Comment;
