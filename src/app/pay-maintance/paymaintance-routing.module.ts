import { paymaintanceComponent } from './paymaintance.component';

import { ResidentGuard } from './../core/resident-guard.service';
import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'paymaintance',component:paymaintanceComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class paymaintanceRouting {
    
}