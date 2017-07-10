import { bookingRouting } from './booking-routing.module';
import { bookingService } from './booking.service';
import { bookingComponent } from './booking.component';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,bookingRouting],
    declarations:[bookingComponent],
    providers:[bookingService]
})

export class bookingModule {

}