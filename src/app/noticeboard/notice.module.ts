import { noticeRouting } from './notice-routing.module';
import { noticeComponent } from './notice.component';
import { noticeService } from './notice.service';



import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,noticeRouting],
    declarations:[noticeComponent],
    providers:[noticeService]
})

export class noticeModule {

}