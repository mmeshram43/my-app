import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { UserForm } from './callbackForm';

@Component({
  selector: 'app-callback-form',
  templateUrl: './callback-form.component.html',
  styleUrls: ['./callback-form.component.css']
})
export class CallbackFormComponent implements OnInit {

  postError = '';
  isPostError = false;
  showSpinner = false;
  showMessageOnSuccess = false;

  defaultUser : UserForm = {
    Name : "",Email : "",emailCheck : false,Phone : "",FundType : ""
  } ;

  clearForm(){
    this.defaultUser = {
      Name : "",Email : "",emailCheck : false,Phone : "",FundType : ""
    } ;
  
  }

  onHttpError( error : any ){
    this.showSpinner = true ;
    this.isPostError = true ;
    this.postError = "Server error. Please try again later."
    this.showSpinner = false ;

  }

  onSuccess(data : any ){
    this.showMessageOnSuccess = true;
    this.postError = "Advisor will get in touch with you."
    this.showSpinner = true ;
    console.log('Success' ,data);
    this.showSpinner = false ;
    this.clearForm();
  }

  onSubmit( form : NgForm )
  {
    // console.log(form.value);
    // console.log(form.valid);
    this.showSpinner = true ; 
    this.dataService.postUserData(form.value).subscribe(
      data => this.onSuccess(data),
      error => this.onHttpError(error)
    );
   

  }

  constructor( private dataService : DataService ) {

   }

  ngOnInit(): void {
  }

}
