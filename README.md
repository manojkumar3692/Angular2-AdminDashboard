# Apartment Application usgin Angular 2 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running App

`cd project
npm install 
ng serve ( run on localhost:4200 ) `

## Angular Concept Involved 

Authentication using Angular 2
Role Based Authentication using Angular 2
HTTP methods like GET,POST,DELETE,UPDATE
Folder Structure for large Application in Angular 2
Include Angular 2 Charts
Add Toastr and Modal using Bootstrap 4
Payment Gateway integrations using Instamojo
Data sharing using Route Paraments between parent and child
Adding Config file for API endpoints
Passing data between parent and child components ( menu Toggle in Mobile View )
ng2-smart-table integration
Building Application using SASS integration in Angular 2

## Story

Lets create the use case and story. We are to build an apartment Management application. The agenda is to solve the problem of two party or roles. Every apartment has an Admin or Management Community and owners/residents.

Lets discuss what all feature admin/management Community should have in this app
-Admin should be able to create an owner/resident, Enters all inputs such as Name, Block-number, Flat-no, mobile number & resident ID. ( here resident ID acts as a primary key )
-Admin while creating an owner, can add the parking space assigned to an owner
-View all the owner and should be able to edit and delete a particular owner/resident ( View displays Resident ID Flat-no etc )
-Collect all Maintenance with the status of which owner has paid or pending.should have an access to send a private message to the particular owner.Admin should also be able to see a metric dashboard with total owners and amount collected etc.
-Every apartment has amenities and the owner can request to access the same for their guest. Once owner sends request admin should be able to see all the request.
-Owners/resident raise complaints, Admin should be able to see all the complaints with details of who has sent it with a title and details & data.
-Notice board allows admin to send a message to all owners/resident. For e.g. (any events happening in the society can be shared with all owners ).
-Dashboard to see the entire payments, owners, complain and request in Graph mode. A complete dashboard along with graph and metrics.

Similarly every owner/resident has features, let us discuss what all to be added
-Owners/Resident will be able to book the amenities available in the apartment.
-Owners/Resident can pay maintenance and check the history of payment.
-A request can be made for their guest to available the club access with entry of some basic inputs
-Owner/resident can raise a complaint , which requires a title and detail description of the complaint .
-All the common information shared by the admin is seen in notice board. An owner gets to see the date of publishing the content.
-An option for the owner to sell out his parking space when interested, Since the owner can sell out his parking space, Booking for a slot can also be made with history






