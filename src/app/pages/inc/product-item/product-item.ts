import { Component, Input } from '@angular/core';
import { Product } from '../../../models/IAllProducts';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {

  @Input() product: Product | undefined

  saveLocal() {
    const stJson = JSON.stringify(this.product);
    localStorage.setItem('item', stJson);
  }

}
