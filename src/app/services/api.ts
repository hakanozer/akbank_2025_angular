import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import { IAllProducts, ISingleProduct } from '../models/IAllProducts';

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

  profileMe(token: string) {
    const url = `${this.apiUrl}profile/me`
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    return this.http.get(url, { headers: headers })
  }

  logout(token: string) {
    const url = `${this.apiUrl}auth/logout`
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    return this.http.post(url, {}, { headers: headers })
  }

  allProduct(page: number = 1, per_page: number = 10) {
    const url = `${this.apiUrl}products?page=${page}&per_page=${per_page}`
    return this.http.get<IAllProducts>(url)
  }

  singleProduct(id: string) {
    const url = `${this.apiUrl}products/${id}`;
    return this.http.get<ISingleProduct>(url);
  }

}