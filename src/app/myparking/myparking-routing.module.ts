import { ResidentGuard } from './../core/resident-guard.service';
import { myParkingComponent } from './myparking.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';

@NgModule({
    imports:[RouterModule.forChild([
        {path:'myparking',component:myParkingComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class myParkingRouting {
    
}