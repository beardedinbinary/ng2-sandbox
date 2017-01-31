import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ServiceRequest } from './request';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
//import { REQUESTS } from './mock-requests';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceRequestService {

    constructor(private http: Http) {}
    private requestUrl = 'http://localhost:3000/service_requests';

    getServiceRequests(): Observable<ServiceRequest[]> {
        return this.http.get(this.requestUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => this.handleError(error));
    }

    private handleError(error: any): Observable<any> {
        console.log('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }
}