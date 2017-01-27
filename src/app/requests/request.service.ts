
import {ServiceRequest} from './request';
import {REQUESTS} from './mock-requests';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceRequestService{
    getServiceRequests(): Promise<ServiceRequest[]> {
        return Promise.resolve(REQUESTS);
    }
}