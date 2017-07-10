import { successModule } from './success/success.module';
import { maintanceModule } from './maintance/maintance.module';
import { paymaintanceModule } from './pay-maintance/paymaintance.module';
import { dashboardModule } from './dashboard/dashboard.module';
import { viewComplaintModule } from './viewComplaint/viewComplaint.module';
import { raiseComplaintModule } from './raiseComplaint/raiseComplaint.module';
import { noticeViewModule } from './noticeView/noticeView.module';
import { noticeModule } from './noticeboard/notice.module';
import { amenitiesRequestModule } from './amenitiesRequest/amenitiesRequest.module';
import { ResidentGuard } from './core/resident-guard.service';
import { AdminGuard } from './core/admin-guard.service';
import { amenitiesModule } from './amenities/amenities.module';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './auth-guard.service';
import { bookingModule } from './booking/booking.module';
import { myParkingModule } from './myparking/myparking.module';
import { editOwnerModule } from './edit-owner/edit-owner.module';
import { ViewOwnerModule } from './view-owner/view-owner.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ListingModule } from './listing/listing.module';
import { SearchModule } from './search/search.module';
import { RegisterModule } from './register/register.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
     CoreModule,
     LoginModule,
     RegisterModule,
     SearchModule,
     ListingModule,
     ViewOwnerModule,
     editOwnerModule,
     myParkingModule,
     bookingModule,
     amenitiesModule,
     amenitiesRequestModule,
     noticeModule,
     noticeViewModule,
     raiseComplaintModule,
     viewComplaintModule,
     dashboardModule,
     paymaintanceModule,
     maintanceModule,
     successModule
  
  ],
  providers: [AuthGuard,AuthService,AdminGuard,ResidentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
