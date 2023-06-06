import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivateComponent } from './activate/activate.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetFinishModule } from './password-reset/finish/password-reset-finish.module';
import { PasswordResetInitModule } from './password-reset/init/password-reset-init.module';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordComponent } from './password/password.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SettingsComponent,
    ActivateComponent,
    RegisterComponent,
    PasswordResetFinishComponent,
    PasswordResetInitComponent,
    PasswordComponent
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    PasswordResetFinishModule,
    PasswordResetInitModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],

  exports: [
    SettingsComponent,
    ActivateComponent,
    RegisterComponent,
    PasswordResetFinishComponent,
    PasswordResetInitComponent,
    PasswordComponent
  ]

})
export class AccountModule { }
