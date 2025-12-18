import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Securtext } from '../../../services/securtext';
import { Api } from '../../../services/api';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  userName = '';
  constructor(private securText: Securtext, private api: Api) {
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
