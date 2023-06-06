import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetInitComponent } from './password-reset-init.component';

const routes: Routes = [
  {
    path: 'reset/request',
    component: PasswordResetInitComponent,
    data: {
      pageTitle: 'Password',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetInitRoutingModule { }


