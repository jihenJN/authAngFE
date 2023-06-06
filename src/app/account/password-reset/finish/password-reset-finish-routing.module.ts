import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordResetFinishComponent } from './password-reset-finish.component';

const routes: Routes = [
  {
    path: 'reset/finish',
    component: PasswordResetFinishComponent,
    data: {
      pageTitle: 'Password',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordResetFinishRoutingModule { }
