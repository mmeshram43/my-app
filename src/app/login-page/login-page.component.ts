import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private route : Router , private authService : AuthService ) { }

  showError = false ;
  errorMessage = ' ';
  showSpinner = false ;


  // Log User In
  onLogin( cred  : any ){
    this.authService.signInUser(cred.value).subscribe( 
      data => {
      console.log('Logging User In -');
      this.showSpinner = false ; 
      this.route.navigate(['/welcome']);

      },
      error => {
        console.log(error);
        this.showSpinner = false ;
      }
    );

  }

  // Sign Up New User 
  onSignUp(form : NgForm ){
    this.showSpinner = true;

    console.log(form.value);
    this.authService.signUpUser(form.value).subscribe(
      data =>{
        console.log(data);
        this.showSpinner = false ; 
      } ,

      error =>{
        console.log(error.error.error.message);
        this.showError = true;
        this.errorMessage = error.error.error.message;
        this.showSpinner = false ; 
        // alert(this.errorMessage);
        // console.log(this.errorMessage);
      } 
      );

    
    form.reset();

  }

  ngOnInit(): void {
  }

}
