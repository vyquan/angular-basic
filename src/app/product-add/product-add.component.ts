import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import {  Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit() {}

  onAddProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      // console.log(data);
      setTimeout(() => {alert('Bạn đã thêm sản phẩm thành công')}),1000;
      this.router.navigateByUrl('/admin/product-list');
    });
    
  }
}

