import { amenitiesRequestRouting } from './amenitiesRequest-routing.module';
import { amenitiesRequestComponent } from './amenitiesRequest.component';
import { amenitiesRequestService } from './amenitiesRequest.service';
import { FilterPipe } from './../core/filter.pipe';


import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,amenitiesRequestRouting],
    declarations:[amenitiesRequestComponent,FilterPipe],
    providers:[amenitiesRequestService]
})

export class amenitiesRequestModule {

}