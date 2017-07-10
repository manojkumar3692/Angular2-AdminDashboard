import { ViewOwnerService } from './../view-owner/view-owner.service';
import { editOwnerService } from './edit-owner.service';
import { editOwnerComponent } from './edit-owner.component';
import { editOwnerRouting } from './edit-owner-routing.module';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
    imports:[editOwnerRouting,SharedModule,Ng2SmartTableModule],
    declarations:[editOwnerComponent],
    providers:[editOwnerService,ViewOwnerService]
})

export class editOwnerModule {
    
}