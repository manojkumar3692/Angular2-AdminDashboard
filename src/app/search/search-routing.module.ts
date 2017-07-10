import { ResidentGuard } from './../core/resident-guard.service';
import { AdminGuard } from './../core/admin-guard.service';
import { NgModule } from '@angular/core';
import { Router,RouterModule} from '@angular/router';
import { SearchComponent } from './search.component';
import {AuthGuard} from '../auth-guard.service';

@NgModule({
    imports:[RouterModule.forChild([
        {path:'search',component:SearchComponent,canActivate:[AuthGuard,ResidentGuard]}
    ])],
    exports:[RouterModule]
})

export class SearchRoutingModule {
    
}