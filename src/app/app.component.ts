import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './produits/products.produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products!: Product[];
  search: string ='';
  title: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.search = '';
    this.products = this.productsService.getAllProducts();
    this.title = "The imaginary world of Disney Plush";
  }
}
