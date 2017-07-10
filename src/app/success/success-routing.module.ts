import { ResidentGuard } from './../core/resident-guard.service';
import { successComponent } from './success.component';



import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'success',component:successComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class successRouting {
    
}