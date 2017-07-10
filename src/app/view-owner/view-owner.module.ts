import { ViewOwnerService } from './view-owner.service';
import { ViewOwnerComponent } from './view-owner.component';
import { SharedModule } from './../shared/shared.module';
import { ViewOwnerRoutingModule } from './view-owner-routing.module';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
    imports:[ViewOwnerRoutingModule,SharedModule,Ng2SmartTableModule],
    declarations:[ViewOwnerComponent],
    providers:[ViewOwnerService]
})

export class ViewOwnerModule {
    
}