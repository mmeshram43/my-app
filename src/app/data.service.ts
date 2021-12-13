import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserForm } from './callback-form/callbackForm';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

  url : string = 'https://putsreq.com/d1PTopjda1qWGYPScOSk';

  postUserData( UserForm : UserForm ) : Observable<any> {
    return this.http.post(this.url,UserForm);

  }
}
