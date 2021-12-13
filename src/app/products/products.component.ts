import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IMutualFund } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle : string ="SBI Mutual Funds";
  showImage  = false;
  buttonTitle = "Hide Image";
  searchQuery = '';
  iconUrl : string = '' ;
  fundsArray : IMutualFund[] = [];
  randomUser : any ;

  constructor( private productsService : ProductsService) {
   }

   fundClicked( item : any){
     console.log(item);
     console.log("clicked");
   }

  ngOnInit(): void {
    console.log('In Ng On Init');
    this.iconUrl = this.productsService.iconUrl;
    this.fundsArray = this.productsService.getProducts();
    // this.randomUser = this.productsService.getRandomUser().subscribe(
    //   data => {
    //     this.randomUser = data;
    //     console.log(data);
    //     console.log(this.randomUser.results[0]);
    //   }
    // );
    // console.log(this.randomUser);
  }

}
