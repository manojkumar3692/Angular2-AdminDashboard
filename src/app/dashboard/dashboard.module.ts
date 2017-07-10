import { dashboardService } from './dashboard.service';
import { dashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,dashboardRouting,ChartsModule],
    declarations:[dashboardComponent],
    providers:[dashboardService]
})

export class dashboardModule {

}