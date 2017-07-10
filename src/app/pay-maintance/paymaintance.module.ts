import { paymaintanceService } from './paymaintance.service';
import { paymaintanceComponent } from './paymaintance.component';
import { paymaintanceRouting } from './paymaintance-routing.module';




import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,paymaintanceRouting],
    declarations:[paymaintanceComponent],
    providers:[paymaintanceService]
})

export class paymaintanceModule {

}