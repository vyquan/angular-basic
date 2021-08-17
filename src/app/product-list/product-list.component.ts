import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  data: Product;
  myClass = 'table-bordered';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      console.log(data);
      
      this.products = this.products.filter(item => item.id != id);
      setTimeout(() => {alert('Bạn đã xoá sản phẩm thành công')
      }, 500);
    });
  }
  detailItem(product: Product) {
    this.data = product;
  }

}
