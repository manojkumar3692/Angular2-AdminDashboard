import { AppSettings } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class successService {

    constructor(private http:Http) {

    }

    getMaintanceDetails() {
         const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.get(AppSettings.API_ENDPOINT+'/maintenance/all',{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }
    
     private handleError(error:any) {
        return Observable.throw(error.json());
    }
}