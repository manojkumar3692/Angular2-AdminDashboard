import { maintanceService } from './maintance.service';
import { maintanceComponent } from './maintance.component';
import { maintanceRouting } from './maintance-routing.module';



import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,maintanceRouting,Ng2SmartTableModule],
    declarations:[maintanceComponent],
    providers:[maintanceService]
})

export class maintanceModule {

}