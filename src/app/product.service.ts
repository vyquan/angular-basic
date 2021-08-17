import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }
  getInfo(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }
  addProduct(item: Product): Observable<Product> {
    return this.http.post<Product>(this.API, item);
  }
  removeProduct(id: Number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  updateProduct(item: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${item.id}`, item);
  }
}
