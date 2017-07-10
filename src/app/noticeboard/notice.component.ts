import { noticeService } from './notice.service';



import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-notice',
    templateUrl: 'notice.html',
    styleUrls: ['./notice.scss']
})

export class noticeComponent implements OnInit {

      formDetails = {
            announcement_content :'',
            announcement_title:''
      }

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private noticeservice:noticeService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
         
        }

        onSubmit() {
            this.noticeservice.postNotice(this.formDetails)
            .subscribe(
                  res => {
                        this.toastr.success(res.message);
                  },
                  error => {
                        this.toastr.error(error.message);
                  }
            )
        }
    
}