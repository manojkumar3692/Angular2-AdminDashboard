import { myParkingService } from './myparking.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'

import { Component, Injectable ,ViewContainerRef ,OnInit, OnDestroy,Input} from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgForm ,FormBuilder, FormGroup} from '@angular/forms';
import { ToastsManager, ToastModule } from 'ng2-toastr/ng2-toastr';

@Component({
     moduleId:module.id,
    selector : 'parking-myparking',
    templateUrl : 'myparking.html',
    styleUrls:['./myparking.scss'],
})

export class myParkingComponent implements OnInit {
    status = false;
    selectedParkingID:any = [];
    parkingDetails:any = [];
    publishDetails:any = [];
    slots = [];
    defaultSlots = [
        {
            slotType:"first",
            name:"First Slot (12.00AM - 6.00AM)",
            availabilityStatus: "NOT_AVAILABLE"
        },
        {
            slotType:"second",
            name:"Second Slot (6.00AM - 12.00PM)",
            availabilityStatus: "NOT_AVAILABLE"
        },
        {
            slotType:"third",
            name:"Third Slot (12.00PM - 6.00PM)",
            availabilityStatus: "NOT_AVAILABLE"
        },
         {
            slotType:"fourth",
            name:"Fourth Slot (6.00PM - 12.00AM)",
            availabilityStatus: "NOT_AVAILABLE"
        }
    ];
    selectedSlots = [];
    date:any = new Date();
    day = 'today';
    publishEntry:any ;
    slotTimingstatus:boolean = false;
   

    constructor(private myparkingservice:myParkingService,public toastr: ToastsManager,vcr: ViewContainerRef,private modalService: NgbModal) {
         this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit()  {
        this.getParkingDetails();
    }

    open(content,parking) {
        this.slots = [];
        this.publishDetails.slotNumber = parking.slotNumber;
         this.publishDetails.parkingType = parking.parkingType;
          this.publishDetails.parkingSlotID = parking.parkingSlotID;
        this.selectedParkingID = parking.parkingSlotID;
    this.modalService.open(content, { windowClass: 'dark-modal' });
      let value = {
              parkingSlotID:this.selectedParkingID,
              availabilityDate: new Date()
          }
          this.slotTimingstatus=true;
         this.getSlotTimings();
  }

  selectDate(day) {
    
      if(day === 'today'){
        this.date = moment(new Date()).format("YYYY-MM-DD");
        this.day = 'today';
      }else if (day === 'tomorrow') {
          this.date = moment(new Date()).add(1,'days').format("YYYY-MM-DD");
           this.day = 'tomorrow';
      }
      this.getSlotTimings();
      
  }

  checkedSlots(event,slot) {
    if(event.target.checked){
        slot.availabilityStatus = 'AVAILABLE'
    }else {
         slot.availabilityStatus = 'NOT_AVAILABLE'
      
    }
  }

    getParkingDetails () {
        this.status = true;
        this.myparkingservice.parkingDetails()
        .subscribe(response=>{
            this.parkingDetails = response.data;
            this.status = false;
        },
        error => {
          this.toastr.error(error.message)
          this.status = false;
        })
    }

    publish() {
       
       
        this.publishEntry = {
            parkingSlotID : this.publishDetails.parkingSlotID,
            availabilityDate: this.date,
            slotTimings: this.slots
        }
        this.myparkingservice.publishSlots(this.publishEntry)
        .subscribe(
            data => {
                this.toastr.success(data.message);
            },
            error => {
                this.toastr.error(error.message);
            }
        )

    }

    getSlotTimings(){
        let value = {
              parkingSlotID:this.selectedParkingID,
              availabilityDate:this.date
          }
           this.slotTimingstatus = true;
           this.slots=[];
          this.myparkingservice.nextDaySlots(value)
          .subscribe(
              res => {
                   this.slotTimingstatus = false;
                   if(res.data.slotTimings.length > 0)
            this.slots = res.data.slotTimings;
            else {
                this.slotTimingstatus = false;
                this.slots = this.defaultSlots;
            }

              },
              error => {
                  this.toastr.error(error.messge)
              }
          )
    }



}