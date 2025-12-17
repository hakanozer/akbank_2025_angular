import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/IAllProducts';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const stObj = localStorage.getItem('item');
    if (stObj) {
      const item = JSON.parse(stObj) as Product;
      console.log('Loaded item from localStorage:', item.title);
    }
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('Detail page for item with id:', id);
    });
  }

}
