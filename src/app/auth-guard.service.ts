import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs/Rx';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authservice:AuthService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
           let status =  this.authservice.getIsLoggedIn()
            if(status === true) {
                return true
            }else {
                this.router.navigate(['login'])
            }
    }
}