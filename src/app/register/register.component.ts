import { ViewOwnerService } from './../view-owner/view-owner.service';
import { RegisterService } from './register.service';
import { Component, Injectable ,ViewContainerRef ,OnInit, OnDestroy} from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgForm ,FormBuilder, FormGroup} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  moduleId: module.id,
  selector: 'parking-register',
  templateUrl: 'register.html',
  styleUrls: ['./register.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {

  selectedUser: number;
  private sub: any;

  flatno = "DEMO 123";


  registerDetails: any = {} // Details of User Registering
  // parkingDetails:any = [] // detaisl of parking available for user
  // parkingInfo:any = {} // tem store of parking details
  parkingSlotDetails:any = [{id:'PS1'}];
  selectedOwner:any ;
  
  constructor(private registerservice:RegisterService,public toastr: ToastsManager,vcr: ViewContainerRef,private route:ActivatedRoute,private viewownerservice:ViewOwnerService, public fb: FormBuilder) 
  {
      this.toastr.setRootViewContainerRef(vcr);
  }



   ngOnInit() {

  //   this.sub = this.route.params.subscribe(params => {
  //     debugger
  //      this.selectedUser = params['id']; // (+) converts string 'id' to a number
  //      // In a real app: dispatch action to load the details here.
  //       this.viewownerservice.editOwner(this.selectedUser)
  //   .subscribe(
  //     data => {
  //        this.registerDetails = data;
  //        this.toastr.success('Fectched Owner Succesfully');
  //        console.log(this.registerDetails)
  //     },
  //     error => {
  //       this.toastr.error(error.message);
  //     }
  //   )
  //   });
     
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

saverange(a) {
  console.log(a)
}
  
  registerUser(register: NgForm) {
    this.registerDetails = {
      name: register.value.name,
      phoneNumber: register.value.number,
      blockNo : register.value.block,
      flatNo : register.value.flatno,
      residentID : register.value.residentID,
      password : register.value.password,
      parkingID : register.value.parkingNumber,
      parkingType : register.value.parkingType,
      parkingSlots:this.parkingSlotDetails
    }
   this.registerservice.registerUser(this.registerDetails)
   .subscribe(
     data => {
          this.toastr.success(data.message);
     },
     error => {
       this.toastr.error(error.message)
     }
   )
  register.reset();
  }

  addParkingSlot() {
    let count = this.parkingSlotDetails.length + 1;
    this.parkingSlotDetails.push({id:'PS'+count});
    console.log(this.parkingSlotDetails);
  }
  removeParkingSlot() {
    let lastItem = this.parkingSlotDetails.length -1;
    this.parkingSlotDetails.splice(lastItem)
  }

  // Adding Parking Slot 

  // addParkingDetails(item) {
  //     this.parkingInfo = {
  //       parkingID : item.value.parkingID,
  //       parkingType : item.value.parkingType
  //     }
  //   this.parkingDetails.push(this.parkingInfo);
  //   console.log(this.parkingDetails)
  //   item.reset();
    
  // }


}