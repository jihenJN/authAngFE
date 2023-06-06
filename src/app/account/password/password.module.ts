import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordStrengthBarComponent } from './password-strength-bar/password-strength-bar.component';


@NgModule({
  declarations: [
    PasswordStrengthBarComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule
  ]
})
export class PasswordModule { }
