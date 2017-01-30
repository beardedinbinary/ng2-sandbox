import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/main';
import * as events from 'events';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {SortDescriptor, orderBy} from '@progress/kendo-data-query';
import {ServiceRequest} from '../request'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements 
OnChanges, OnInit{
  @Input() requests;

  private sort: SortDescriptor[] = [];
  private gridView: GridDataResult;
  private gridData = this.requests;


  constructor() { }
  
  ngOnChanges() {
    if(!this.gridData){
     this.gridData = this.requests;
    }else{
      this.loadData();
    }
  }

  ngOnInit(){
    //console.log('init');
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
  filterFromChart(event){
    console.log("from table: " + event);
  }

}
