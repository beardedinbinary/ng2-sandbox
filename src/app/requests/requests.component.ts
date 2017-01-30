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

  constructor(private serviceRequestService: ServiceRequestService){

  }

  getServiceRequests(): void{
    this.serviceRequestService.getServiceRequests()
                          .then(requests => this.requests = requests);
  }
  ngOnInit(): void {
    this.getServiceRequests();
  }

  chartFilterEvent(event){
    console.log(event);
  }

}
