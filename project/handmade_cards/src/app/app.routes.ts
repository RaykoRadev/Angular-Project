import { Routes } from '@angular/router';
import { Home } from './features/home/home.component';
import { LoginForm } from './auth/login/login-form.component';
import { RegisterForm } from './auth/register-form/register-form.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm },
  { path: '**', redirectTo: '/home' },
];
