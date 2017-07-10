import { AppSettings } from './../app.config';
import { Http,Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
@Injectable()
export class editOwnerService {
  constructor(private http:Http) {
  }
  
    editOwner(id:any) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
        return this.http.get(AppSettings.API_ENDPOINT+'/users/'+id,{headers:headers})
        .map((data:Response)=> {
            return data.json().data;
        })
        .catch(this.handleError);
    }

    saveOwner(value) {
  const headers = new Headers();
        headers.append('Content-Type', 'application/json');
          let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
        return this.http.put(AppSettings.API_ENDPOINT+'/users',value,{headers:headers})
        .map((data:Response)=> {
            return data.json();
        })
        .catch(this.handleError);
    }

    private handleError(error:any) {
        return Observable.throw(error.json());
    }
}