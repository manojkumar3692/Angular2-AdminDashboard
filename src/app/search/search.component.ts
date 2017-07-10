
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SearchService } from './search.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,RouterModule} from '@angular/router';
import { NgForm } from '@angular/forms';

import * as moment from 'moment';
import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId:module.id,
    selector:'parking-search',
    templateUrl: 'search.html',
    styleUrls: ['./search.scss']
})

export class SearchComponent implements OnInit {
        status:any = true;
        totalamount:any = '';
        parkingSlots:any = [];
        clickedSlot:any = [];
        date:any = {
             availabilityDate : moment(new Date()).format("YYYY-MM-DD"),
             day : 'today'
        }
        slotID = [];
        private modalRef: NgbModalRef;
        constructor(private searchservice:SearchService,public toastr: ToastsManager,vcr: ViewContainerRef,private modalService: NgbModal,private router:Router) {
  this.toastr.setRootViewContainerRef(vcr);
        }

        ngOnInit() {
            this.getAllParkingSlots();
        }


        selectDate(day) {
            // alert('you have selected'+" " + day)
        
            if(day === 'today') {
                this.date.availabilityDate = moment(new Date()).format("YYYY-MM-DD");
                this.date.day = 'today';
              
            }else if(day === 'tomorrow'){
                  this.date.availabilityDate = moment(new Date()).add(1,'days').format("YYYY-MM-DD");
                this.date.day = 'tomorrow';
                 
            }
             this.getAllParkingSlots();
        }


        getAllParkingSlots() {
            this.status = true;
            this.searchservice.allParkingSlots(this.date)
            .subscribe(
                res => {
                    this.parkingSlots = res.data;
                    // this.toastr.success(res.message);
                    this.status = false;
                },
                error => {
                    this.toastr.error(error.message);
                     this.status = false;
                }
            )
        }

         open(content,parking) {
    
    this.modalRef = this.modalService.open(content, { windowClass: 'dark-modal' });
        this.totalamount = '';
           this.slotID = [];
  }
  
        booking(value){
            this.clickedSlot = value;
        }

          selectedSlots(event,id) {
             
            //    this.slotID = [];
    if(event.target.checked){
        // id.availabilityStatus = 'AVAILABLE'
        this.slotID.push(id);
        this.totalamount = (this.slotID.length * 50);
        // console.log(this.slotID);
    }else {
        //  id.availabilityStatus = 'NOT_AVAILABLE'
        let index = this.slotID.indexOf(id)
        this.slotID.splice(index,1);
         this.totalamount = (this.slotID.length * 50);
    }
  }

  confirmBook() {
//     let payload = {
//          purpose: 'BOOKING',
//   amount: this.totalamount,
//    send_email: false,
//    send_sms:false
//     }
//       this.searchservice.instamojo(payload) 
//       .subscribe(
//           data => {
//               console.log(data);
//           },
//           error => {
//               this.toastr.error(error.message);
//           }
//       )
        let ids = {
            availabilityID:this.slotID
        }
       this.searchservice.book(ids)
       .subscribe(
           res=> {
               this.toastr.success(res.message);
               this.router.navigate(['/search']);
              this.modalRef.close();
               this.getAllParkingSlots();
           },
           error => {
               this.toastr.error(error.message);
           }
       )
  }


}
