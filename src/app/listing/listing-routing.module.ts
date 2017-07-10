import { ListingComponent } from './listing.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[RouterModule.forChild([
        {path:'listing',component:ListingComponent}
    ])],
    exports:[RouterModule]
})

export class ListingRoutingModule {}