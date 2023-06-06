import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password.component';

const routes: Routes = [
  {
    path: 'password',
    component: PasswordComponent,
    data: {
      pageTitle: 'Password',
    },
   // canActivate: [UserRouteAccessService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
