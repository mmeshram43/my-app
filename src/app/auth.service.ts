import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constants
  url : string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  signInUrl : string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  apiKey : string = 'AIzaSyAcQHy7C6PnDzWYe1YoY-puy1fPa-PQEZc';

  //
 AuthSignInResponse = {
    email: "",
    expiresIn: "",
    idToken : '',
    kind: "",
    localId: "",
    refreshToken: "",
    registered: null
  }

  constructor( private httpClient : HttpClient ) { }

  errorMessage = '';
  showError = false ;


  signInUser( cred : any ) : Observable<any> {
    console.log(cred)
    return this.httpClient.post(this.signInUrl+this.apiKey,
      {
        email : cred.email,
        password : cred.password,
        returnSecureToken : true
      }
      )


  }

  signUpUser( form : any ) : Observable<any> {

    console.log('Auth Service Logs',form);

    return this.httpClient.post(this.url+this.apiKey,
      {
        email : form.email,
        password : form.password,
        returnSecureToken : true
      }
      )
  }

}
