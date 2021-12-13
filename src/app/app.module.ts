import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { IMutualFund } from './products/product';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { CallbackFormComponent } from './callback-form/callback-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    CarouselComponent,
    ProductDetailComponent,
    CallbackFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'auth', component:LoginPageComponent },
      {path:'products', component:ProductsComponent },
      { 
        path:'products/:id', 
        canActivate: [ProductDetailGuard],
        component:ProductDetailComponent
       },

      {path:'welcome', component:CarouselComponent },
      {path:'callback', component:CallbackFormComponent },
      {path:'', component:CarouselComponent,pathMatch:'full' },

    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
