
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule,BrowserAnimationsModule,ToastModule.forRoot()],
  declarations: [],
  // tslint:disable-next-line:max-line-length
  exports: [CommonModule, FormsModule, ReactiveFormsModule,HttpModule],
  providers: []
})
export class SharedModule { }