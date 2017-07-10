import { noticeViewService } from './noticeView.service';




import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-noticeView',
    templateUrl: 'noticeView.html',
    styleUrls: ['./noticeView.scss']
})

export class noticeViewComponent implements OnInit {

      noticeDetails:any = [];

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private noticeviewservice:noticeViewService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getNotice();
        }

        getNotice() {
              this.noticeviewservice.allNotice()
              .subscribe(
                    res => {
                          this.noticeDetails = res.data
                    },
                    error => {
                          this.toastr.error(error.message)
                    }
              )
        }
       
    
}