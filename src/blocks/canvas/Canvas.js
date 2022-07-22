import {Chart, registerables} from 'chart.js';
import ending from '../../utils/ending';

class Canvas {
    constructor(root) {
        this.init(root);
    }

    init(root) {
        this.root = root;
        this.canvas = root.querySelector('.js-canvas__area');
        Chart.register(...registerables);
        const badParam = this.canvas.dataset.bad;
        const normalParam = this.canvas.dataset.normal;
        const goodParam = this.canvas.dataset.good;
        const awesomeParam = this.canvas.dataset.awesome;
        const allParams = [badParam, normalParam, goodParam, awesomeParam];
        const countParams = allParams.reduce((acc, item) => {
            acc += Number(item);
            return acc;
        }, 0);
        this.data = {
            labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
            datasets: [{
                label: 'My First Dataset',
                data: allParams,
                backgroundColor: [
                    '#919191',
                    '#BC9CFF',
                    '#6FCF97',
                    '#FFE39C'
                ]

            }]
        };
        if (this.canvas) {
            this.createChart();
            this.changeLabel(countParams);
        }
    }

    changeLabel(value) {
        const label = this.root.querySelector('.canvas__word');
        label.textContent = ending(value, ['голос', 'голоса', 'голосов']);
    }

    createChart() {
        new Chart(this.canvas, {
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

export default Canvas;
