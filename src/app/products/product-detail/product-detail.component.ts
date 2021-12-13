import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitile = 'Product Details';
  fund : any ;
  funds : any ;
  constructor( private route : ActivatedRoute, private serv : ProductsService, private router : Router ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // filtering by Product ID to get single product
    this.fund = this.serv.getProductById(id)[0];
    console.log(this.fund);
    console.log(id);
  }

  onBack(){
    this.router.navigate(['/products']);

  }

}
