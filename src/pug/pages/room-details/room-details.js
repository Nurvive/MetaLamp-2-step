import './room-details-kit/room-details.scss'
import {Chart, registerables} from 'chart.js';
import 'jquery'
import slick from 'slick-carousel'
import 'slick-carousel/slick/slick.scss'

$(window).resize(function () {
    let width = $(this).width()
    if (width < 900)
        $('#room-details__gallery').slick({
            slidesToShow: 1,
            arrows: false,
        })
    else
        $('#room-details__gallery').slick("unslick")
})


Chart.register(...registerables);
let ctx = document.getElementById('room-details__chart');
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
        ],

    }]
}
if (ctx) {
    let chart = new Chart(ctx, {
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
                    cutout: 53,
                }
            },
            plugins: {
                legend: {
                    position: "right",
                    reverse: true,
                    display: false,
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        font: {
                            family: "Montserrat",
                            lineHeight: 24
                        }
                    }
                },
            },
            elements: {
                point: {}

            }
        }
    })
}
