import './room-details-kit/room-details.scss'
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);
// import Chart from "chart.js/auto"

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
let chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        layout: {
            padding: {
            }
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
                display:false,
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
