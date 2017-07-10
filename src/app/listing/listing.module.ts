import { ListingService } from './listing.service';
import { ListingComponent } from './listing.component';
import { ListingRoutingModule } from './listing-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,ListingRoutingModule],
    providers:[ListingService],
    declarations:[ListingComponent]
})

export class ListingModule {

}