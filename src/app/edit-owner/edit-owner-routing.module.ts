import { AdminGuard } from './../core/admin-guard.service';
import { AuthGuard } from './../auth-guard.service';
import { editOwnerComponent } from './edit-owner.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[RouterModule.forChild([
        {path:'editOwner/:id',component:editOwnerComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class editOwnerRouting {

}