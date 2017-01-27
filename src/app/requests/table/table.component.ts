import { Component, Input, OnChanges, OnInit } from '@angular/core';
//import {ServiceRequest} from '../request'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements 
OnChanges, OnInit{
  @Input() requests;

  constructor() { }
  
  ngOnChanges() {
    console.log(this.requests);
  }

  ngOnInit(){
    console.log('init');
  }

}
