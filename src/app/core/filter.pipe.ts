
import {Pipe,PipeTransform} from '@angular/core';
import * as _ from "lodash";

@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform {
transform(value:any,searchString:any){
  return null
}
}