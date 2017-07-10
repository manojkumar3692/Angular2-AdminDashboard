import { AppSettings } from './../app.config';
import { Http,Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class myParkingService {
  constructor(private http:Http) {
  }

  parkingDetails() {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.get(AppSettings.API_ENDPOINT+'/parking',{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
  }

  slotDetails(value) {
  const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.get(AppSettings.API_ENDPOINT+'/parking/publish/'+value,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
  }

  publishSlots(details) {
     const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/parking/publish',details,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
  }

  nextDaySlots(value) {
    
      const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
          return this.http.post(AppSettings.API_ENDPOINT+'/parking',value,{headers:headers})
          .map((data:Response)=> {
            return data.json()
          })
          .catch(this.handleError);
  }

   private handleError(error:any) {
        return Observable.throw(error.json());
    }
}