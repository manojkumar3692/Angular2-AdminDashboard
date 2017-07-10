import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './auth.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId:module.id,
    selector: 'app-parking-header',
    templateUrl: './header.html'
})

export class HeaderComponent {

     roleID:any;
 @Output() onToggle= new EventEmitter<boolean>();
 menuToggle = false;
  subscription: Subscription;
  constructor(private router:Router,private authservice:AuthService) {
   this.getRoleID();

    this.subscription = authservice.userLoggedIn$.subscribe(
      data => {
       this.getRoleID();
    });
  }

  getRoleID() {
 this.roleID = this.authservice.getRoleID();

  }
    
    logout() {
        this.authservice.logout();
        this.router.navigate(['/login']);
        this.authservice.announceLogin();
    }

    toggleMenu(){
        this.menuToggle=!this.menuToggle;
        this.onToggle.emit(this.menuToggle);
    }

}