import './room-card-kit/room-card.scss'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

$('.room-card__top').slick({
    dots:true,
    prevArrow: '<button class="room-card__arrow room-card__arrow_prev fas fa-chevron-left"></button>',
    nextArrow: '<button class="room-card__arrow room-card__arrow_next fas fa-chevron-right"></button>',
    dotsClass: 'room-card__dots'
})
