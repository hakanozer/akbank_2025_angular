import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Securtext } from '../../../services/securtext';
import { Api } from '../../../services/api';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

    private readonly store: Store<{ basket: number[] }> = inject(Store);
    basketArr: Signal<number[]> = this.store.selectSignal((state) => state.basket);

  userName = '';
  constructor(
    private securText: Securtext, 
    private api: Api,
  ) {
    const name = localStorage.getItem("name");
      if (name) {
        const decryptedName = this.securText.decrypt(name);
        this.userName = decryptedName;
      } 
   }


  logout() {
        this.api.logout().subscribe({
          next: (res) => {
            localStorage.removeItem('token')
            window.location.replace('/')
          },
          error: (err) => {
          }
        })
  }

}
