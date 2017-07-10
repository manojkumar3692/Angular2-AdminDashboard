import { viewComplaintService } from './viewComplaint.service';





import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-viewComplaint',
    templateUrl: 'viewComplaint.html',
    styleUrls: ['./viewComplaint.scss']
})

export class viewComplaintComponent implements OnInit {

      allComplaint:any = [];

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private viewcomplaintservice:viewComplaintService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getAllComplaint();
        }

        getAllComplaint() {
              this.viewcomplaintservice.allComplaint()
              .subscribe(
                    res => {
                          this.allComplaint = res.data
                    },
                    error => {
                          this.toastr.error(error.message);
                    }
              )
        }

       
    
}