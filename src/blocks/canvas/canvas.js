import {Chart, registerables} from 'chart.js';

class Canvas {
    constructor(element) {
        this.init(element);
    }

    init(element) {
        this.ctx = element;
        Chart.register(...registerables);
        const badParam = this.ctx.dataset.bad;
        const normalParam = this.ctx.dataset.normal;
        const goodParam = this.ctx.dataset.good;
        const awesomeParam = this.ctx.dataset.awesome;
        this.data = {
            labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
            datasets: [{
                label: 'My First Dataset',
                data: [badParam, normalParam, goodParam, awesomeParam],
                backgroundColor: [
                    '#919191',
                    '#BC9CFF',
                    '#6FCF97',
                    '#FFE39C'
                ]

            }]
        };
        if (this.ctx) {
            (() => (new Chart(this.ctx, {
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
            })))();
        }
    }
}

export default Canvas;
