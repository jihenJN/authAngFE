import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // { path: 'UserManagementList', component:ListComponent },
  { path: 'UserManagementDetail', component: DetailComponent },
  { path: 'UserManagementUpdate/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

