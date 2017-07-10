import { AppSettings } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class RegisterService {
    constructor(private http:Http){}
    
    registerUser(details:any) {

        const body = JSON.stringify(details);
        
        const headers = new Headers();
         let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppSettings.API_ENDPOINT+'/users',body,{headers:headers})
        .map((data:Response) => {
            return data.json().data;
        })
        .catch(this.handleError);
    }
    private handleError(error:any) {
        return Observable.throw(error.json());
    }
}