import { viewComplaintComponent } from './viewComplaint.component';
import { AdminGuard } from './../core/admin-guard.service';

import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'viewComplaint',component:viewComplaintComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class viewComplaintRouting {
    
}