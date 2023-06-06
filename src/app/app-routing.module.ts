import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // data: {
    //   authorities: [Authority.ADMIN],
    // }
  },

  { path: 'login',
    loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
