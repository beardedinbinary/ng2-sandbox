import { filterBy } from '@progress/kendo-data-query/dist/npm/filtering/filter-expression.factory';
import { Subscription } from 'rxjs/Rx';
import { ServiceRequestService } from '../request.service';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/main';
import * as events from 'events';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {SortDescriptor, orderBy} from '@progress/kendo-data-query';
import {ServiceRequest} from '../request';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy{
  @Input() requests;

  private sort: SortDescriptor[] = [];
  private gridView: GridDataResult;
  private gridData = this.requests;
  private chartFilter: string;
  private chartCategory: string;
  chartSeriesSubscription: Subscription;
  chartCategorySubscription: Subscription;

  constructor(private serviceRequestService: ServiceRequestService) {
     
    this.chartCategorySubscription = this.serviceRequestService.chartSeriesCategoryChange$.subscribe(
                              chartCategoryFilter => {
                                this.chartCategory = chartCategoryFilter;
                              },
                              err => {
                                console.log(err);
                              });

    this.chartSeriesSubscription = this.serviceRequestService.chartSeriesClick$.subscribe(
                              chartFilter => {
                                this.filterFromChart(this.chartCategory, chartFilter);
                              },
                              err => {
                                console.log(err);
                              });
   }
  
  ngOnInit(){
    this.gridData = this.requests;
    this.loadData();

  }
  ngOnDestroy(){
    this.chartSeriesSubscription.unsubscribe()
    this.chartCategorySubscription.unsubscribe()
  }

  protected sortChange(sort: SortDescriptor[]): void{
    this.sort = sort;
    this.loadData();
  }

  private loadData(): void{
    this.gridView = {
      data: orderBy(this.gridData, this.sort),
      total: this.gridData.length
    }
  }

  filterFromChart(keyFilter, valueFilter){
    let data = this.gridData.filter(function(el){return el[keyFilter] == valueFilter});
    let total = data.length;
    console.log(keyFilter, valueFilter);
    console.log(data);
    this.gridView = { 
      data: data,
      total: total
    }
  }

}
