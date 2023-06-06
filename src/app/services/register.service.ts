import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationConfigService } from './application-config.service';
import { Registration } from '../models/register';


@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(
    private http: HttpClient, 
    private applicationConfigService: ApplicationConfigService) {}

  save(registration: Registration): Observable<{}> {
    return this.http.post(this.applicationConfigService.getEndpointFor('account/register'), registration);
  }
}