import { ResidentGuard } from './../core/resident-guard.service';
import { AdminGuard } from './../core/admin-guard.service';
import { AuthGuard } from './../auth-guard.service';
import { bookingComponent } from './booking.component';
import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'booking',component:bookingComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class bookingRouting {
    
}