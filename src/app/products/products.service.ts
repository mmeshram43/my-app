import { Injectable } from "@angular/core";
import { IMutualFund } from "./product";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ProductsService{
    iconUrl : string = 'data:image/png;base64,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';
    // apiUrl : string = 'https://randomuser.me/api/';
    
    funds : any = [

      {Name: "Nifty Index Fund",Risk : "Very High",CAGR : "12.5 %" ,Rating :'4',ProductId: 101,Category :"EQUITY", ExitLoad : "1%", LaunchDate : '01-01-2006', Benchmark:'Nifty 50',FundManager :'Mr. R Srinivasan',AUM : '1012 CR' },
      {Name: "Focused Equity Fund",Risk : "Very High",CAGR : "12.5 %" ,Rating :'4',ProductId: 102,Category :"EQUITY", ExitLoad : "1%", LaunchDate : '01-01-2006', Benchmark:'Semsex',FundManager :'Mr. V Naidu', AUM: "5121 CR" },
      {Name: "Magnum Constant Maturity Fund", Risk : "Medium",CAGR : "6 %" ,Rating :'3',ProductId: 104,Category :"DEBT", ExitLoad : "1%", LaunchDate : '01-01-2006', Benchmark:'GILT',FundManager :'Mr. R K Patil', AUM : '12142 CR' },
      {Name: "Equity Hybrid Fund", Risk : "Medium",CAGR : "6 %" ,Rating :'5',ProductId: 105,Category :"EQUITY", ExitLoad : "1%", LaunchDate : '01-01-2006', Benchmark:'Nifty 50',FundManager :'Mr. R Shastri' ,AUM : '1478 CR' },
      {Name: "Debt Hybrid Fund", Risk : "Medium",CAGR : "6.5 %" ,Rating :'4',ProductId: 106,Category :"HYBRID", ExitLoad : "1%", LaunchDate : '01-01-2006', Benchmark:'Debt Index ',FundManager :'Mrs. Sohini Andani', AUM : '14786 CR'  }
    ];

    constructor( private http : HttpClient ){}
    // getRandomUser(){
    //   return this.http.get(this.apiUrl);
    // }
    getProducts():IMutualFund[] {
        return this.funds ;
    }

    getProductById( id : number ){
      return this.funds.filter( (data: { ProductId: number; }) => { return data.ProductId == id } )  ;
    };


}