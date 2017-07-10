import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared/shared.module';
@NgModule({
    imports: [LoginRoutingModule,SharedModule],
    declarations: [LoginComponent],
    providers: [LoginService]
})

export class LoginModule {}