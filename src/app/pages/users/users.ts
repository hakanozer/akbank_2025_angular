import { Component } from '@angular/core';
import { PageTitle } from "../../directive/page-title";

@Component({
  selector: 'app-users',
  imports: [PageTitle],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

}
