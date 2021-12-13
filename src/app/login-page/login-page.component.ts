import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( private route : Router) { }

  onLogin( form  : any ){
    console.log(form.value);
    this.route.navigate(['/welcome']);
  }

  ngOnInit(): void {
  }

}
