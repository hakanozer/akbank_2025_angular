import { Component, Input } from '@angular/core';
import { Product } from '../../../models/IAllProducts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomPipe } from "../../../pipes/custom-pipe";

@Component({
  selector: 'app-product-item',
  imports: [RouterModule, CommonModule, CustomPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {

  date = new Date();
  @Input() product: Product | undefined

  saveLocal() {
    const stJson = JSON.stringify(this.product);
    localStorage.setItem('item', stJson);
  }

}
