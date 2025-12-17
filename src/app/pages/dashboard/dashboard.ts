import {  Component, signal } from '@angular/core';
import { Api } from '../../services/api';
import { IAllProducts } from '../../models/IAllProducts';
import { ProductItem } from "../inc/product-item/product-item";

@Component({
  selector: 'app-dashboard',
  imports: [ProductItem],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  allProducts = signal<IAllProducts | null>(null);
  pageArr:number[] = [];
  per_page = 10
  active = 1
  constructor( private api: Api) {}

  ngOnInit() {
    this.getProducts(1);
  }

  getProducts(page: number) {
    this.active = page;
    this.api.allProduct(page, this.per_page).subscribe( res => {
      const arr:number[] = [];
      for (let i = 1; i <= res.meta.pagination.total_pages; i++) {
        arr.push(i);
      }
      this.allProducts.set(res);
      this.pageArr = arr;
    })
  }

}
