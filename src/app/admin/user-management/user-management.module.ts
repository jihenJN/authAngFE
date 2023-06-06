import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { UserManagementRoutingModule } from './user-management-routing.module';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteComponent } from './delete/delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DeleteComponent,
    DetailComponent,
    UpdateComponent,
    // ListComponent
    
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserModule
    
  ],

  exports: [ 
    DeleteComponent,
    DetailComponent,
    UpdateComponent,
    // ListComponent
  ]
})
export class UserManagementModule { }
