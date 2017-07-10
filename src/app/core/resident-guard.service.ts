import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class ResidentGuard implements CanActivate {
    constructor(private authservice: AuthService,private router : Router) {}
 
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
        let status =  this.authservice.getRoleID() === 'RESIDENT';
            if(status === true) {
                return true
            }else {
                this.router.navigate(['dashboard'])
            }
    }
}