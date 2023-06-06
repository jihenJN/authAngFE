import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Welcome, Java Hipster!',
    },
  },

  {
    path: 'login',
    component: LoginComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
