// import { Component } from '@angular/core';

import { Component } from "@angular/core";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
// }

@Component ({ 
  selector:"app-root",
  templateUrl: './app.component.html'
})

export class AppComponent{
  pageTitle : string = "SBI MF Clone";
}

