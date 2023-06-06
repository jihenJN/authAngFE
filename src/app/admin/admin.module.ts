import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserManagementModule } from './user-management/user-management.module';
import { DeleteComponent } from './user-management/delete/delete.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserManagementModule,
    
    
  ]
})
export class AdminModule { }
