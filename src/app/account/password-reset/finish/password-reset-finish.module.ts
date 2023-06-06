import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PasswordResetFinishRoutingModule } from './password-reset-finish-routing.module';
import { PasswordResetFinishComponent } from './password-reset-finish.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    PasswordResetFinishRoutingModule
  ]
})
export class PasswordResetFinishModule { }
