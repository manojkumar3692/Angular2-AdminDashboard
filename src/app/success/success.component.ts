import { successService } from './success.service';


import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-success',
    templateUrl: 'success.html',
    styleUrls: ['./success.scss']
})

export class successComponent implements OnInit {

     

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private successservice:successService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            
        }

  

       
    
}