import {Chart, registerables} from 'chart.js';

class Canvas {
    constructor() {
        Chart.register(...registerables);
        this.ctx = document.getElementById('room-details__chart');
        this.data = {
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
        this.init();
    }

    init() {
        if (this.ctx) {
            // eslint-disable-next-line no-new
            new Chart(this.ctx, {
                type: 'doughnut',
                data: this.data,
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
    }
}

export default Canvas;
