import { ServiceRequest } from '../request';
import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ServiceRequestService} from '../request.service';
import { EventEmitter } from 'events';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() requests;

  private displayTypes: string[] = ['column','bar','line','area','verticalArea','pie','donut'];
  private chartParams: string[] = ['requestType', 'requestStatus', 'name', 'priority'];
  currentChartType = 'column';
  currentChartParam = this.chartParams[0];
  categories;
  chartStore;
  chartData; 

  constructor(private serviceRequestService:ServiceRequestService, store: Store<any>){
    this.chartStore = store.select('chart')
  }

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
    this.chartStore.dispatch({type:'CAT_CHANGE', payload: param});
    this.getChartData();
  }
  getChartData(){
      this.sortByOptions = Object.keys(this.requests)

      let requestTypeCount = this.count(this.requests, item=>item[this.currentChartParam]);
      this.showChartCategoryAs(requestTypeCount);

      let data = [];

      Object.keys(requestTypeCount).forEach(function(key){
       data.push(requestTypeCount[key]);
      });

      this.chartData = data;
  }

  ngOnInit() {
     this.getChartData();
  }

  onSeriesClick(e): void{
    this.chartStore.dispatch({type:'CAT_SELECT', current_category: e.category, current_filter: this.currentChartParam});
  }

  showChartAs(displayType){
    this.currentChartType = displayType;
  }
}
