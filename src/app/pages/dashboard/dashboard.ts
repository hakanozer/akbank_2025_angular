import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Api } from '../../services/api';
import { IAllProducts } from '../../models/IAllProducts';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  allProducts:IAllProducts | undefined;
  per_page = 10
  constructor( private api: Api) { }

  ngOnInit() {
    this.getProducts(1);
  }

  getProducts(page: number) {
    this.api.allProduct(page, this.per_page).subscribe( res => {
      console.log(res);
      this.allProducts = res
    })
  }

}
