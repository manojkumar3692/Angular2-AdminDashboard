import { noticeViewComponent } from './noticeView.component';
import { AdminGuard } from './../core/admin-guard.service';
import { ResidentGuard } from './../core/resident-guard.service';
import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'noticeView',component:noticeViewComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class noticeViewRouting {
    
}