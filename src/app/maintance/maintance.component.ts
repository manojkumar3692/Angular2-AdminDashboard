import { maintanceService } from './maintance.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';



import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-maintance',
    templateUrl: 'maintance.html',
    styleUrls: ['./maintance.scss']
})

export class maintanceComponent implements OnInit {

      maintanceList:any = [];

      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private maintanceservice:maintanceService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.maintainceDetails();
        }

  
  tableSetting = {
    mode: 'external',
    hideSubHeader: true,
    delete:{
      confirmDelete :true
    },
    hideHeader: false,
    actions : {
      edit : true,
      delete:false,
      position:'right'
    },
    edit : {
      editButtonContent : 'Message'
    },
    columns: {
      owner_name: {
        title: 'Name',
        filter: false
      },
      flat_number: {
        title: 'Flat No',
        filter: false
      },
      phone_number: {
        title: 'Mobile Number',
        filter: false
      },
      payment_status: {
        title: 'Status',
        filter: false
      }
    }
  }

  maintainceDetails () {
    this.maintanceservice.getMaintanceDetails()
    .subscribe(
      res => {
        this.maintanceList = res.data;
        console.log(this.maintanceList)
      },
      error => {
        this.toastr.error(error.message);
      }
    )
  }
       
    
}