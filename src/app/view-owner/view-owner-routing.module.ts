import { AdminGuard } from './../core/admin-guard.service';
import { ViewOwnerComponent } from './view-owner.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';


@NgModule({
    imports:[RouterModule.forChild([
        {path:'viewOwner',component:ViewOwnerComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class ViewOwnerRoutingModule {

}