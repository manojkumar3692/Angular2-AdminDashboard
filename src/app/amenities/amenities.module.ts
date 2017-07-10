import { amenitiesRouting } from './amenities-routing.module';
import { amenitiesComponent } from './amenities.component';
import { amenitiesService } from './amenities.service';


import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,amenitiesRouting],
    declarations:[amenitiesComponent],
    providers:[amenitiesService]
})

export class amenitiesModule {

}