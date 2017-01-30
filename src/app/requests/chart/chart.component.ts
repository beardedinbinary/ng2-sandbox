import { EventEmitter } from 'events';
import { Item } from '@progress/kendo-angular-grid/dist/npm/data.iterators';
import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

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
  chartData=[]; 


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
    /*if(this.requests){
      let prioritycount = this.count(this.requests, item=>item.priority);
      console.log(prioritycount);
      this.showChartCategoryAs(prioritycount);
    }
    */

    if(this.requests){
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

  private onSeriesClick(e): void{
    console.log('onSeriesClick', e)
    this.seriesClick.emit(e.category);
  }

  showChartAs(displayType){
    this.currentChartType = displayType;
  }
}
