import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dynamic-chart-example',
    template: `
        <chart [options]="options" (load)="saveInstance($event.context)"></chart>
        <button (click)="addPoint()">Add Point</button>
    `
})
export class DynamicChartComponent{
    constructor() {
        this.options = {
            title: { text : 'chart with dynamic data' },
            series: [{
                data: [2,3,5,8]
            }]
        };
        console.log('constructor');
    }
    chart : any;
    options: any;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
    addPoint() {
        this.chart.series[0].addPoint(Math.random() * 10);

        for (var series of this.chart.series) {
            console.log(series);
        }
    }
}