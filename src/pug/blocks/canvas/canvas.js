import {Chart, registerables} from 'chart.js';

class Canvas {
    constructor(element) {
        Chart.register(...registerables);
        this.ctx = element;
        const badParam = this.ctx.dataset.bad;
        const okParam = this.ctx.dataset.ok;
        const goodParam = this.ctx.dataset.good;
        const superParam = this.ctx.dataset.super;
        this.data = {
            labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
            datasets: [{
                label: 'My First Dataset',
                data: [badParam, okParam, goodParam, superParam],
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
