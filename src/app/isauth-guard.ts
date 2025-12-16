import { CanActivateFn } from '@angular/router';

export const isauthGuard: CanActivateFn = (route, state) => {
  const isAuth = !!localStorage.getItem('token');
  if (isAuth) {
    window.location.replace("/dashboard");
    return false;
  }
  return true;
};
