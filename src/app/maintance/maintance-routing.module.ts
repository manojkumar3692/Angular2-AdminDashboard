import { AdminGuard } from './../core/admin-guard.service';
import { maintanceComponent } from './maintance.component';

import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'maintance',component:maintanceComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class maintanceRouting {
    
}