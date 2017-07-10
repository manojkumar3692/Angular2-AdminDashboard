
import { CommonModule } from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';

@NgModule({
    imports:[CommonModule],
    declarations: [HeaderComponent,FooterComponent],
    exports: [HeaderComponent,FooterComponent],
    providers:[]
})

export class CoreModule {
     constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}