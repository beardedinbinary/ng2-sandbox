import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {ServiceRequest} from './request';
import {REQUESTS} from './mock-requests';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceRequestService{

    constructor(private http: Http){}

    getServiceRequests(): Promise<ServiceRequest[]> {
        /*return this.http.get('http://localhost:3000/service_requests')
                    .toPromise()
                    .then(response => response.json().data as ServiceRequest[])
                    .catch(this.handleError);
                    */



        return Promise.resolve(REQUESTS);
    }
    private handleError(error: any): Promise<any>{
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}