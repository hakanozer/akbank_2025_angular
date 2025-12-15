import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private apiUrl = 'https://jsonbulut.com/api/';
  constructor( private http: HttpClient ) {}

  userLogin(email: string, password: string) {
    const url = `${this.apiUrl}auth/login`
    const sendObj = {
      email: email,
      password: password
    }
    return this.http.post<IUser>(url, sendObj)
  }

}
