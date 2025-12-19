import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/IAllProducts';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addBasket } from '../../redux/actions/basket.action';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {

   selectedImage!: string;

  constructor(
    private api: Api, 
    private activeRoute: ActivatedRoute, 
    private router: Router,
    private store: Store<{ basket: number[] }>
  ) {}
  item = signal<Product | null>(null);

  ngOnInit() {
    const stObj = localStorage.getItem('item');
    if (stObj) {
      const item = JSON.parse(stObj) as Product;
      console.log('Loaded item from localStorage:', item.title);
    }
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      this.api.singleProduct(id).subscribe({
        next: (response) => {
          this.item.set(response.data);
          this.selectedImage = this.item()!.images[0]; // ilk büyük resim

        },
        error: (error) => {
          // navigation to dashboard
          this.router.navigate(['/dashboard']);
        }
      });
    });
  }

    changeImage(img: string) {
      this.selectedImage = img;
    }

    btnAddBasket() {
      if (this.item()) {
        const id = this.item()!.id;
        console.log('Adding to basket:', id);
        this.store.dispatch(addBasket(id));
      }
    }

}


