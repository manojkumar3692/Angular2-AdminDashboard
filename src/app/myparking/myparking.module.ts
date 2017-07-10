import { myParkingService } from './myparking.service';
import { myParkingComponent } from './myparking.component';
import { myParkingRouting } from './myparking-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
    imports:[myParkingRouting,SharedModule,Ng2SmartTableModule],
    declarations:[myParkingComponent],
    providers:[myParkingService]
})

export class myParkingModule {
    
}