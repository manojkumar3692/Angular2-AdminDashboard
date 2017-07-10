import { AppSettings } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class noticeService {

    constructor(private http:Http) {

    }

    postNotice(value) {
         const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/announcement',value,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }
    
     private handleError(error:any) {
        return Observable.throw(error.json());
    }
}