import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './auth-guard';
import { isauthGuard } from './isauth-guard';
import { Detail } from './pages/detail/detail';

export const routes: Routes = [
    { path: '', component: Login, canActivate: [isauthGuard] },
    { path: 'register', component: Register },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'dashboard/:id', component: Detail, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];
