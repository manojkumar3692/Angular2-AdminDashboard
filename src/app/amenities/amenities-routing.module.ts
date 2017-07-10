import { ResidentGuard } from './../core/resident-guard.service';
import { AuthGuard } from './../auth-guard.service';
import { amenitiesComponent } from './amenities.component';

import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'amenities',component:amenitiesComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class amenitiesRouting {
    
}