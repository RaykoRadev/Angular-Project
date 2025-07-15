import { Routes } from '@angular/router';
import { Home } from './features/home/home.component';
import { LoginForm } from './auth/login/login-form.component';
import { RegisterForm } from './auth/register-form/register-form.component';
import { Anniversary } from './features/category/anniversary/anniversary.component';
import { Birthday } from './features/category/birthday/birthday.component';
import { Wedding } from './features/category/wedding/wedding.component';
import { Baptism } from './features/category/baptism/baptism.component';
import { Boxes } from './features/category/boxes/boxes.component';
import { Babies } from './features/category/babies/babies.component';
import { CreateCard } from './features/create-card/create-card.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm },

  { path: 'anniversary', component: Anniversary },
  { path: 'birthday', component: Birthday },
  { path: 'wedding', component: Wedding },
  { path: 'baptism', component: Baptism },
  { path: 'boxes', component: Boxes },
  { path: 'babies', component: Babies },
  { path: 'create', component: CreateCard },

  //! always in the bottom
  { path: '**', redirectTo: '/home' },
];
