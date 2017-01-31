import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() requests;
  @Output() seriesClick = new EventEmitter();

  private displayTypes: string[] = ['column','bar','line','area','verticalArea','pie','donut'];
  currentChartType = 'column';
  currentChartCategory = 'priority';
  chartCategories = ['priority', 'requestType'];
  categories;
  chartData; 

  private sortByOptions: string[];

  private count = function(array,classifier){
    return array.reduce(function(counter, item){
      let property = (classifier || String)(item);
      counter[property] = counter.hasOwnProperty(property) ? counter[property] + 1: 1;
      return counter;
    }, {});
  }
  private getCategories(countObject){
    return Object.keys(countObject);
  }
  showChartCategoryAs(categoryType){
    return this.categories = this.getCategories(categoryType)
  }
  ngOnChanges() {

    if(this.requests){
      this.sortByOptions = Object.keys(this.requests)

      let requestTypeCount = this.count(this.requests, item=>item.requestType);
      console.log(requestTypeCount);

      this.showChartCategoryAs(requestTypeCount);

      let data = [];

      Object.keys(requestTypeCount).forEach(function(key){
       data.push(requestTypeCount[key]);
      });

      this.chartData = data;
    }
  }
  ngOnInit() {
  }

  onSeriesClick(e): void{
    console.log('onSeriesClick', e)
    this.seriesClick.emit(e.category);
  }

  showChartAs(displayType){
    this.currentChartType = displayType;
  }
}
