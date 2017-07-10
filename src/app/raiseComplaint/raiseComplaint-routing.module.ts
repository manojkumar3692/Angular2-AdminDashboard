import { raiseComplaintComponent } from './raiseComplaint.component';
import { ResidentGuard } from './../core/resident-guard.service';
import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'raiseComplaint',component:raiseComplaintComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class raiseComplaintRouting {
    
}