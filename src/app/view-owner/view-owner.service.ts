import { AppSettings } from './../app.config';
import { Http,Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
@Injectable()

export class ViewOwnerService {
    constructor(private http:Http) {
    }

    getAllOwner() {
       
    
          const headers = new Headers();
           let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
        headers.append('Content-Type', 'application/json');
        return this.http.get(AppSettings.API_ENDPOINT+'/users',{headers:headers})
        .map((data:Response)=> {
            return data.json().data;
        })
        .catch(this.handleError);
    }

    deleteOwner(id){
          const headers = new Headers();
           let key = JSON.parse(localStorage.getItem("parkingUser")).token;
          headers.append("Authorization", "Bearer " + key);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppSettings.API_ENDPOINT+'/users/'+ id,{headers:headers})
        .map((data:Response)=> {
            return data.json();
        })
        .catch(this.handleError);
    }


  

    private handleError(error:any) {
        return Observable.throw(error.json());
    }
}