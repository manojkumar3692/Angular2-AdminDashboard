import { AdminGuard } from './../core/admin-guard.service';
import { RegisterComponent } from './register.component';
import { Router,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from '../auth-guard.service';
@NgModule({
    imports:[RouterModule.forChild([
        {path:'createOwner',component:RegisterComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class RegisterRoutingModule{
    
}