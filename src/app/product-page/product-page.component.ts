import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[];
  data: Product;

  myClass = 'table-bordered';
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  detailItem(product: Product) {
    this.data = product;
  }

}
