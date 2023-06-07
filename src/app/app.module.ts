import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { httpInterceptorProviders } from './core/interceptor';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfigService } from './services/application-config.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeModule } from './home/home/home.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    AccountModule,
    HttpClientModule,
    HomeModule,
    NgxPaginationModule,

    AdminModule,
 

    NgxWebstorageModule.forRoot({ separator: '-', caseSensitive: true }),
    
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationConfigService: ApplicationConfigService) {
  //  applicationConfigService.setEndpointPrefix(SERVER_API_URL);
    // registerLocaleData(locale);
    // dpConfig.minDate = { year: dayjs().subtract(100, 'year').year(), month: 1, day: 1 };
 }
}