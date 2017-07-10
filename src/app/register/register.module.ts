import { RegisterService } from './register.service';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
@NgModule({
    imports: [RegisterRoutingModule,SharedModule],
    declarations: [RegisterComponent],
    providers: [RegisterService]
})

export class RegisterModule {}