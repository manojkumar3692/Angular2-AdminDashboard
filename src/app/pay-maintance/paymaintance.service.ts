import { AppSettings } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class paymaintanceService {

    constructor(private http:Http) {

    }

    getPayMaintaince() {
         const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.get(AppSettings.API_ENDPOINT+'/maintenance',{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }


    payMaintance(value) {
       const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/maintenance/payment',{maintenance_id:value},{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }
    
     private handleError(error:any) {
        return Observable.throw(error.json());
    }
}