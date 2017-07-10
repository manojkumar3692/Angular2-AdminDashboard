import { dashboardComponent } from './dashboard.component';
import { AdminGuard } from './../core/admin-guard.service';

import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'dashboard',component:dashboardComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class dashboardRouting {
    
}