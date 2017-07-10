import { successService } from './success.service';
import { successComponent } from './success.component';
import { successRouting } from './success-routing.module';


import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,successRouting],
    declarations:[successComponent],
    providers:[successService]
})

export class successModule {

}