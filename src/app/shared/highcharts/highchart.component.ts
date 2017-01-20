import { Options } from 'ts-node/dist';

import {Component, Input} from '@angular/core';
import {ChartModule} from 'angular2-highcharts';


@Component({
    selector: 'simple-chart-example',
    templateUrl:'./highchart.component.html'
        
})
export class HighchartComponentDemo {
    dataSet = [29.9, 71.5, 106.4, 129.2];
    chartTypes = ['area','line','bar','pie','spline',];
    chartTitle = 'My Awesome Chart';
    chartType = 'bar';

    constructor() {
        this.options = {
            chart: {type: 'bar'},
            title: {text : this.chartTitle},
            series: [{
                data: this.dataSet,
            }]
        };
    }

    chart: any;
    options: Object;
    saveInstance(chartInstance){
        this.chart = chartInstance;
        console.log(chartInstance);
    }
    showChartAs(newChartType){
        //this.options = newChartType;
        this.chart.update({
            chart:{
                type: newChartType 
            }
        }); 
    }
}