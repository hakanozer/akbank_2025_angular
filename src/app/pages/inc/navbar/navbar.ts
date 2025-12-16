import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Securtext } from '../../../services/securtext';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  userName = '';
  constructor(private securText: Securtext) {
    const name = localStorage.getItem("name");
      if (name) {
        const decryptedName = this.securText.decrypt(name);
        this.userName = decryptedName;
      } 
   }

}
