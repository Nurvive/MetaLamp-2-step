import './room-details.scss';
import {Chart, registerables} from 'chart.js';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';

const $gallery = $('#room-details__gallery');
const $galleryImages = $gallery.children();
let slickExist = null;
$(window).resize(function () {
    const width = document.documentElement.clientWidth;
    if (width > 900 && slickExist) {
        $gallery.slick('unslick');
        $gallery.append($galleryImages);
    }
});
$(document).ready(() => {
    const width = document.documentElement.clientWidth;
    $gallery.on('init', () => {
        slickExist = true;
    });
    if (width < 900) {
        $gallery.slick({
            slidesToShow: 1,
            arrows: false
        });
    }
});
Chart.register(...registerables);
const ctx = document.getElementById('room-details__chart');
const data = {
    labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [{
        label: 'My First Dataset',
        data: [0, 65, 65, 130],
        backgroundColor: [
            '#919191',
            '#BC9CFF',
            '#6FCF97',
            '#FFE39C'
        ]

    }]
};
if (ctx) {
    // eslint-disable-next-line no-new
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            layout: {
                padding: {}
            },

            responsive: false,
            maintainAspectRatio: false,
            datasets: {
                doughnut: {
                    cutout: 53
                }
            },
            plugins: {
                legend: {
                    position: 'right',
                    reverse: true,
                    display: false,
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        font: {
                            family: 'Montserrat',
                            lineHeight: 24
                        }
                    }
                }
            },
            elements: {
                point: {}
            }
        }
    });
}
