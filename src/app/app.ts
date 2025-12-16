import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./pages/inc/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoginedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
