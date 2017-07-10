import { raiseComplaintService } from './raiseComplaint.service';
import { raiseComplaintComponent } from './raiseComplaint.component';
import { raiseComplaintRouting } from './raiseComplaint-routing.module';




import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,raiseComplaintRouting],
    declarations:[raiseComplaintComponent],
    providers:[raiseComplaintService]
})

export class raiseComplaintModule {

}