import * as https from 'https';
import { Http } from '@angular/http';
import { TableComponent } from './table/table.component';
import { Component, OnInit, Output} from '@angular/core';
import { ServiceRequest } from './request';
import { ServiceRequestService } from './request.service';



@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  providers: [ServiceRequestService]

})
export class RequestsComponent implements OnInit {

  requests: ServiceRequest[];

  constructor(private serviceRequestService: ServiceRequestService){}

  loadServiceRequests(){
    this.serviceRequestService.getServiceRequests()
                  .subscribe(
                    requests => {this.requests = requests },
                      err => {
                        console.log(err);
                      })
  }
  ngOnInit(): void {
    this.loadServiceRequests();

  }
}
