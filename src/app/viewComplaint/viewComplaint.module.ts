import { viewComplaintService } from './viewComplaint.service';
import { viewComplaintComponent } from './viewComplaint.component';
import { viewComplaintRouting } from './viewComplaint-routing.module';





import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,viewComplaintRouting],
    declarations:[viewComplaintComponent],
    providers:[viewComplaintService]
})

export class viewComplaintModule {

}