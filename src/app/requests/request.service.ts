import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ServiceRequest } from './request';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceRequestService {

    private chartSeriesClickSource = new Subject<string>();
    private chartSeriesCategoryChange = new Subject<string>();

    chartSeriesClick$ = this.chartSeriesClickSource.asObservable();
    chartSeriesCategoryChange$ = this.chartSeriesCategoryChange.asObservable();

    private requestUrl = 'http://localhost:3000/service_requests';

    constructor(private http: Http) {
        console.log('request service instantiated');
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

    setChartSeriesClick(e){
        let category = e.category;
        this.chartSeriesClickSource.next(category);
    }

    getChartSeriesClick(){
        return this.chartSeriesClick$; 
    }

    setChartSeriesCategory(chartParam){
        this.chartSeriesCategoryChange.next(chartParam);
        console.log(chartParam);
        console.log("categoryset: ", this.chartSeriesCategoryChange$);
    }
    getChartSeriesCategory(){
        return this.chartSeriesCategoryChange$;
    }
}
