import { noticeViewService } from './noticeView.service';
import { noticeViewComponent } from './noticeView.component';
import { noticeViewRouting } from './noticeView-routing.module';




import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,noticeViewRouting],
    declarations:[noticeViewComponent],
    providers:[noticeViewService]
})

export class noticeViewModule {

}