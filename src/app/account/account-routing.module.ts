import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: 'activate',
    component: ActivateComponent,
    data: {
      pageTitle: 'Activation',
    }
  },
    
  {
    path: 'password',
    component: PasswordComponent,
    data: {
      pageTitle: 'Password',
    }

  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      pageTitle: 'Registration',
    },
  },

  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      pageTitle: 'Settings',
    },
    //canActivate: [UserRouteAccessService],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
