import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[SharedModule,SearchRoutingModule],
    declarations:[SearchComponent],
    providers:[SearchService]
})

export class SearchModule {

}