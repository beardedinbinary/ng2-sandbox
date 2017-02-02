import { ServiceRequest } from '../request';
import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ServiceRequestService} from '../request.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() requests;

  constructor(private serviceRequestService:ServiceRequestService){}

  private displayTypes: string[] = ['column','bar','line','area','verticalArea','pie','donut'];
  private chartParams: string[] = ['requestType', 'requestStatus', 'name', 'priority'];
  currentChartType = 'column';
  currentChartParam = this.chartParams[0];
  categories;
  chartData; 

  private sortByOptions: string[];

  loadServiceRequests(){
      this.serviceRequestService.getServiceRequests()
                    .subscribe(
                      requests => {this.requests = requests },
                        err => {
                          console.log(err);
                        })
    }
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
  showChartWithParam(param){
    this.currentChartParam = param;
    this.serviceRequestService.setChartSeriesCategory(param);
    this.getChartData();
  }
  getChartData(){
      this.sortByOptions = Object.keys(this.requests)

      let requestTypeCount = this.count(this.requests, item=>item[this.currentChartParam]);
      console.log("getchartdata",requestTypeCount);
      this.showChartCategoryAs(requestTypeCount);

      let data = [];

      Object.keys(requestTypeCount).forEach(function(key){
       data.push(requestTypeCount[key]);
      });

      this.chartData = data;
  }
  ngOnChanges() {
  }
  ngOnInit() {
     this.getChartData();
     this.serviceRequestService.setChartSeriesCategory(this.currentChartParam);
  }

  onSeriesClick(e): void{
    this.serviceRequestService.setChartSeriesClick(e);
  }

  showChartAs(displayType){
    this.currentChartType = displayType;
  }
}
