import { AdminGuard } from './../core/admin-guard.service';
import { noticeComponent } from './notice.component';
import { ResidentGuard } from './../core/resident-guard.service';
import { AuthGuard } from './../auth-guard.service';


import { NgModule } from '@angular/core';
import { Router,RouterModule } from '@angular/router';



@NgModule({
    imports:[RouterModule.forChild([
        {path:'notice',component:noticeComponent,canActivate:[AuthGuard,AdminGuard]}
    ])],
    exports:[RouterModule]
})

export class noticeRouting {
    
}