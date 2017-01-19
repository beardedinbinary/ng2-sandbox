import { Component } from '@angular/core';

@Component({
  selector: 'chart-js-demo',
  templateUrl: './chartjs.component.html'
})
export class ChartJsComponent {
  public chartTypes = ['pie','line','bar'];
  public chartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public chartData:number[] = [350, 450, 100];
  public chartType:string = 'line';
  chart;

  public showChartAs(newChartType){
      this.chartType = newChartType
  }
  public saveInstance(chartInstance){
      this.chart = chartInstance;
      console.log(this.chart);
  }
  public addDataPoint(){
      this.chartData.push(Math.round(Math.random() * 1000));
      this.chartLabels.push('new data');
      console.log(this.chart);
  }
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}