import { raiseComplaintService } from './raiseComplaint.service';




import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-raiseComplaint',
    templateUrl: 'raiseComplaint.html',
    styleUrls: ['./raiseComplaint.scss']
})

export class raiseComplaintComponent implements OnInit {

      formDetails = {
            complaint_text :'',
            complaint_title:''
      }

      myComplaint:any = [];

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private raisecomplaintservice:raiseComplaintService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getComplaint()
        }

        onSubmit() {
            this.raisecomplaintservice.sendComplaint(this.formDetails)
            .subscribe(
                  res => { 
                        this.toastr.success(res.message)
                  },
                  error => {
                        this.toastr.error(error.message)
                  }
            )
        }

        getComplaint() {
              this.raisecomplaintservice.getComplaint()
              .subscribe(
                    res => {
                          this.myComplaint = res.data;
                    },
                    error => {
                          this.toastr.error(error.message);
                    }
              )
        }
    
}