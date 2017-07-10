import { editOwnerService } from './edit-owner.service';
import { ViewOwnerService } from './../view-owner/view-owner.service';

import { Component, Injectable ,ViewContainerRef ,OnInit, OnDestroy,Input} from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { NgForm ,FormBuilder, FormGroup} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
     moduleId:module.id,
    selector : 'parking-editOwner',
    templateUrl : 'edit-owner.html',
    styleUrls:['./edit-owner.scss']
})
export class editOwnerComponent implements OnInit,OnDestroy {

  selectedid: number;
  private sub: any;
  selectedOwner:any=[] ;
  myForm : FormGroup;


 
  constructor(public toastr: ToastsManager,vcr: ViewContainerRef,private route:ActivatedRoute,private viewownerservice:ViewOwnerService, private fb: FormBuilder,private editownerservice:editOwnerService) 
  {
      this.toastr.setRootViewContainerRef(vcr);
  }


   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.selectedid = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
        this.editownerservice.editOwner(this.selectedid)
    .subscribe(
      data => {
        this.selectedOwner = [data];
        this.toastr.success('Fecthed the Owner Data');
        this.setOwnerDetails();
       
      },
      error => {
        this.toastr.error(error.message);
      }
    )
    
});



this.myForm = this.fb.group({
    flatNo:[''],
    blockNo:[''],
    name:[''],
    phoneNumber:[''],
    password:[''],
    residentID:['']
})
     
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setOwnerDetails () {
       this.myForm.patchValue({
            flatNo : this.selectedOwner[0].flatNo,
            blockNo:this.selectedOwner[0].blockNo,
            name:this.selectedOwner[0].name,
            phoneNumber:this.selectedOwner[0].phoneNumber,
            residentID:this.selectedOwner[0].residentID
        })
  }

  saveOwner() {

    let formValue = this.myForm.value
    formValue.parkingSlots = this.selectedOwner[0].parkingSlots
    formValue.userID = this.selectedOwner[0].userID
    this.editownerservice.saveOwner(formValue)
   .subscribe(
     data => {
          this.toastr.success(data.message);
     },
     error => {
       this.toastr.error(error.message)
     }
   )
  }
}