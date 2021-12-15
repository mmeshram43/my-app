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
  iconUrl : string = '' ;
  fundsArray : IMutualFund[] = [];
  filteredArray : IMutualFund[] =[];
  randomUser : any ;
  fiterString : string = '';

  private _searchQuery : string = '';

  get searchQuery(): string {
    return this._searchQuery;
  }
  set searchQuery( val : string){
    console.log('In setter')
    this._searchQuery = val;
     this.filteredArray= this.performFilter(val);
  }

  performFilter( query : string ) : IMutualFund[] {
    console.log('Inside filter');
    query = query.toLocaleLowerCase();
    return this.fundsArray.filter( (fund : IMutualFund) => fund.Name.toLocaleLowerCase().includes(query) );


  }


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
    this.filteredArray = this.fundsArray ;
  
  }

}
