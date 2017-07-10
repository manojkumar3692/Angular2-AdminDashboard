import { ViewOwnerService } from './view-owner.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Router,RouterModule } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'parking-viewOwner',
  templateUrl: 'view-owner.html',
  styleUrls: ['./view-owner.scss']
})
export class ViewOwnerComponent implements OnInit {

  allOwnerDetails: any = [];

  constructor(private viewownerservice: ViewOwnerService, public toastr: ToastsManager, vcr: ViewContainerRef,private router:Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.allOwner();
  }


  tableSetting = {
    mode: 'external',
    hideSubHeader: true,
    delete:{
      confirmDelete :true
    },
    columns: {
      residentID: {
        title: 'Resident ID',
        filter: false
      },
      flatNo: {
        title: 'Flat No',
        filter: false
      },
      name: {
        title: 'Name',
        filter: false
      },
      phoneNumber: {
        title: 'Phone Number',
        filter: false
      }
    }
  }
  ;

  allOwner() {
    this.viewownerservice.getAllOwner()
      .subscribe(
      data => {
        this.allOwnerDetails = data;
      },
      error => {
        this.toastr.error(error.message)
      }
      )
  }

  // Edit a Owner 

  editOwner(id) {
    this.router.navigate(['/editOwner',id.data.parkingSlots[0].ownerID]);
  }


  deleteOwner(event) {
       if (window.confirm('Are you sure you want to delete?')) {
     this.viewownerservice.deleteOwner(event.data.userID)
     .subscribe(
       data => {
         this.toastr.success(data.message);
          this.allOwner();
       },
       error => {
         this.toastr.error(error.message);
       }
     )
    } else {
      event.confirm.reject();
    }
  }

}