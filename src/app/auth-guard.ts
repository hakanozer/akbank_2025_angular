import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Api } from './services/api';
import { Securtext } from './services/securtext';

export const authGuard: CanActivateFn = (route, state) => {
  const url = route.url[0].path;
  console.log('AuthGuard called for URL:', url);
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("/");
    return false;
  }
  // inject Api service to verify token
  if (isTokenExpired(token)) {
    localStorage.removeItem('token')
    window.location.replace('/')
    return false;
  }
  const securtext = inject(Securtext);
  inject(Api).profileMe().subscribe({
    next: (res) => {
      const obj = JSON.parse(JSON.stringify(res));
      const name = obj.data.name;
      localStorage.setItem("name", securtext.encrypt(name));
    },
    error: (err) => {
      localStorage.removeItem('token')
      window.location.replace('/')
    }
  })
  return true;
};


function isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() >= payload.exp * 1000;
    } catch {
      return true;
    }
  }