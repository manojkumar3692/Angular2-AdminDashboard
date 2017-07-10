import { bookingService } from './booking.service';

import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment'

@Component({
    moduleId:module.id,
    selector:'parking-booking',
    templateUrl: 'booking.html',
    styleUrls: ['./booking.scss']
})

export class bookingComponent implements OnInit {

        bookingDetails:any = [];
    
        constructor(private bookingservice:bookingService,public toastr: ToastsManager,vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getbookingDetails();
        }

        getbookingDetails() {
            this.bookingservice.getBookingDetails()
            .subscribe(
                res => {
                    this.bookingDetails = res.data;
                },
                error => {
                    this.toastr.error(error.message);
                }
            )
        }

}