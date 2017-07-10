import { amenitiesService } from './amenities.service';


import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-amenities',
    templateUrl: 'amenities.html',
    styleUrls: ['./amenities.scss']
})

export class amenitiesComponent implements OnInit {

        amenitiesDetails:any = {
            visitor_name : '',
            visitor_number:''
        };
      private modalRef: NgbModalRef;
        constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private amenitiesservice:amenitiesService,private modalService: NgbModal) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
         
        }

         open(content,parking) {
    this.modalRef = this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  bookAmenities() {
      this.amenitiesDetails = {
         visit_date:moment(new Date()).format("YYYY-MM-DD"),
	amenity_type:"VISITOR_PASS"
      }
      this.amenitiesservice.isBooked(this.amenitiesDetails)
      .subscribe(
          res => {
              this.toastr.success('Succesfully Booked')
          },
          error => {
              this.toastr.error('Error In Booking Amenities')
          }
      )
  }
    
}