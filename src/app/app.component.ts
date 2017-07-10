import { AuthService } from './core/auth.service';
import { Component } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  roleID:any;
  subscription: Subscription;
  toggleState=false;
  constructor(private authservice:AuthService) {
   this.getRoleID();

    this.subscription = authservice.userLoggedIn$.subscribe(
      data => {
       this.getRoleID();
    });
  }

  getRoleID() {
 this.roleID = this.authservice.getRoleID();

  }

  onToggle(toggleState: boolean) {
    
    this.toggleState=!this.toggleState;
  }
}
