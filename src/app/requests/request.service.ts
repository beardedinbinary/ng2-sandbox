import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ServiceRequest } from './request';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

class chartFilterStore {
    currentCategory: string;
    currentFilter: string;
}

@Injectable()
export class ServiceRequestService {

    private requestUrl = 'http://localhost:3000/service_requests';

    chartStore;

    constructor(private http: Http, store: Store<chartFilterStore>){
        this.chartStore = store.select('chart');

        /*
        this.chartCategorySubscription = store.select('request').subscribe(
                              chartCategoryFilter => {
                                this.chartCategory = chartCategoryFilter['currentCategory'];
                                this.chartFilter = chartCategoryFilter['currentFilter'];
                              },
                              err => {
                                console.log(err);
                              });
        }
        */
  

        console.log(this.chartStore);
    }

    private handleError(error: any): Observable<any> {
        console.log('An error occurred', error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getServiceRequests(): Observable<ServiceRequest[]> {
        return this.http.get(this.requestUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => this.handleError(error));
    }

}
