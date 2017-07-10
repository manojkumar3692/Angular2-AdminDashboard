import { AppSettings } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class SearchService {

    constructor(private http:Http) {

    }

    allParkingSlots(date) {
         const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/parking/all',date,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }

    book(date) {
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/parking/book',date,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
    }
    
    instamojo(payload){
 const headers = new Headers(); 
        headers.append('X-Api-Key' ,'7915af215db9a3dd21e8daabe064431c');
        headers.append('X-Auth-Token','03922e25e7dc367ae52974fc9e67b8a2');
      return this.http.post('https://test.instamojo.com/api/1.1/payment-requests/',{form:payload},{headers: headers})
      .map((data:Response)=> {
        return data.json();
      })
       .catch(this.handleError);
    }


     private handleError(error:any) {
        return Observable.throw(error.json());
    }
}