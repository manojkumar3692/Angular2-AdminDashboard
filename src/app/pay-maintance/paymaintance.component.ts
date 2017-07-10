import { paymaintanceService } from './paymaintance.service';




import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-paymaintance',
    templateUrl: 'paymaintance.html',
    styleUrls: ['./paymaintance.scss']
})

export class paymaintanceComponent implements OnInit {

      maintanceDetails:any = [];

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private paymaintanceservice:paymaintanceService,private modalService: NgbModal,private router:Router) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getMaintainceAmount();
        }

        
        getMaintainceAmount () {
            this.paymaintanceservice.getPayMaintaince()
            .subscribe(
                  res => {
                        this.maintanceDetails = res.data;
                     
                  },
                  error => {
                        this.toastr.error(error.message);
                  }
            )
        }

        makePayment(value) {
              let maintenance_id = value;
              console.log(value);
              this.paymaintanceservice.payMaintance(maintenance_id)
              .subscribe(
                    res => {
                          window.location.href = res.data.payment_request.longurl;
                        //  this.router.navigate([res.data.payment_request.longurl])
                    },
                    error => {
                          this.toastr.error(error.message);
                    }
              )
        }
  
       
    
}