import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Api } from './services/api';

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
  inject(Api).profileMe(token).subscribe({
    next: (res) => {
      
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